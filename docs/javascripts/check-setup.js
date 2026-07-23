/* Check Your Setup — reads a Meshtastic DeviceProfile (.cfg) export entirely
   in the browser and checks it against the Welsh Mesh recommended settings.
   Nothing is uploaded anywhere. Field numbers and enum values are taken
   straight from the meshtastic protobufs. */
(function () {
  "use strict";

  // --- enum lookups (meshtastic config.proto) ---
  var REGIONS = {0:"UNSET",1:"US",2:"EU_433",3:"EU_868",4:"CN",5:"JP",6:"ANZ",7:"KR",8:"TW",9:"RU",10:"IN",11:"NZ_865",12:"TH",13:"LORA_24",14:"UA_433",15:"UA_868",16:"MY_433",17:"MY_919",18:"SG_923",19:"PH_433",20:"PH_868",21:"PH_915",22:"ANZ_433",23:"KZ_433",24:"KZ_863",25:"NP_865",26:"BR_902",29:"EU_866",30:"EU_874",31:"EU_917",32:"EU_N_868"};
  var PRESETS = {0:"LONG_FAST",1:"LONG_SLOW",2:"VERY_LONG_SLOW",3:"MEDIUM_SLOW",4:"MEDIUM_FAST",5:"SHORT_SLOW",6:"SHORT_FAST",7:"LONG_MODERATE",8:"SHORT_TURBO",9:"LONG_TURBO",10:"LITE_FAST",11:"LITE_SLOW",12:"NARROW_FAST",13:"NARROW_SLOW",14:"TINY_FAST",15:"TINY_SLOW",16:"MEDIUM_TURBO"};
  var ROLES = {0:"CLIENT",1:"CLIENT_MUTE",2:"ROUTER",3:"ROUTER_CLIENT",4:"REPEATER",5:"TRACKER",6:"SENSOR",7:"TAK",8:"CLIENT_HIDDEN",9:"LOST_AND_FOUND",10:"TAK_TRACKER",11:"ROUTER_LATE",12:"CLIENT_BASE"};

  var EU_868 = 3, LONG_FAST = 0;

  // --- minimal protobuf reader ---
  function readVarint(u8, s) {
    var result = 0, shift = 0, b;
    do {
      b = u8[s.p++];
      result += (b & 0x7f) * Math.pow(2, shift);
      shift += 7;
    } while (b & 0x80 && s.p < u8.length);
    return result;
  }

  // Parse a Uint8Array into { fieldNumber: [values...] }.
  // Varints become numbers; length-delimited fields become Uint8Arrays.
  function parse(u8) {
    var fields = {}, s = { p: 0 };
    while (s.p < u8.length) {
      var tag = readVarint(u8, s);
      var field = Math.floor(tag / 8), wire = tag & 7, val;
      if (wire === 0) { val = readVarint(u8, s); }
      else if (wire === 2) {
        var len = readVarint(u8, s);
        val = u8.subarray(s.p, s.p + len);
        s.p += len;
      } else if (wire === 5) { s.p += 4; val = null; }
      else if (wire === 1) { s.p += 8; val = null; }
      else { break; }
      (fields[field] = fields[field] || []).push(val);
    }
    return fields;
  }

  function num(f, n, dflt) { return f[n] !== undefined ? f[n][0] : dflt; }
  function raw(f, n) { return (f[n] !== undefined && f[n][0] instanceof Uint8Array) ? f[n][0] : null; }
  function str(f, n) { var b = raw(f, n); return b ? new TextDecoder().decode(b) : null; }
  function sub(f, n) { var b = raw(f, n); return b ? parse(b) : null; }

  function b64urlToBytes(s) {
    s = s.replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    var bin = atob(s), u8 = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }

  // --- pull the settings we care about out of a DeviceProfile ---
  function extract(u8) {
    var dp = parse(u8);
    var out = {
      longName: str(dp, 1), shortName: str(dp, 2), channelUrl: str(dp, 3),
      role: 0, mqttEnabled: false,
      region: null, usePreset: 1, modemPreset: 0, hopLimit: null, primaryDefaultKey: null
    };

    var cfg = sub(dp, 4);              // config -> device -> role
    if (cfg) { var dev = sub(cfg, 1); if (dev) out.role = num(dev, 1, 0); }

    var mod = sub(dp, 5);             // module_config -> mqtt -> enabled
    if (mod) { var mqtt = sub(mod, 1); if (mqtt) out.mqttEnabled = num(mqtt, 1, 0) === 1; }

    if (out.channelUrl && out.channelUrl.indexOf("#") !== -1) {   // channel url -> ChannelSet
      try {
        var cs = parse(b64urlToBytes(out.channelUrl.split("#")[1]));
        var lora = sub(cs, 2);
        if (lora) {
          out.usePreset = num(lora, 1, 1);
          out.modemPreset = num(lora, 2, 0);
          out.region = num(lora, 7, 0);
          out.hopLimit = num(lora, 8, null);
        }
        if (cs[1]) { var ch0 = parse(cs[1][0]); var psk = raw(ch0, 2); out.primaryDefaultKey = psk ? psk.length <= 1 : null; }
      } catch (e) { /* leave lora fields null so they report as "couldn't read" */ }
    }
    return out;
  }

  // --- the rules ---
  function pass(t, d) { return { level: "pass", title: t, detail: d }; }
  function warn(t, d) { return { level: "warn", title: t, detail: d }; }
  function fail(t, d) { return { level: "fail", title: t, detail: d }; }

  function runChecks(c) {
    var out = [];

    if (c.region === EU_868) out.push(pass("Region", "Set to EU_868, correct for the UK."));
    else if (c.region === null) out.push(warn("Region", "Couldn't read the region from this file."));
    else if (c.region === 0) out.push(fail("Region", "No region set. It must be EU_868 before you transmit."));
    else out.push(fail("Region", "Set to " + (REGIONS[c.region] || c.region) + ", should be EU_868."));

    if (c.region !== null) {
      if (c.usePreset && c.modemPreset === LONG_FAST) out.push(pass("Modem preset", "Set to LONG_FAST, the Welsh Mesh standard."));
      else if (!c.usePreset) out.push(fail("Modem preset", "You're on custom LoRa settings, not the LONG_FAST preset, so you won't talk to the rest of the mesh."));
      else out.push(fail("Modem preset", "Set to " + (PRESETS[c.modemPreset] || c.modemPreset) + ", should be LONG_FAST."));
    }

    if (c.hopLimit === null) out.push(warn("Hop limit", "Couldn't read the hop limit from this file."));
    else if (c.hopLimit <= 4) out.push(pass("Hop limit", "Set to " + c.hopLimit + ", 4 or under is spot on."));
    else out.push(fail("Hop limit", "Set to " + c.hopLimit + ". Keep it at 4 or under, higher just floods the mesh."));

    var generic = c.longName && /^meshtastic[\s_]+[0-9a-f]{2,4}$/i.test(c.longName.trim());
    if (!c.longName) out.push(fail("Node name", "No name set. Give your node a proper name."));
    else if (generic) out.push(fail("Node name", 'Still the default name "' + c.longName + '". Please rename it so people know who you are.'));
    else out.push(pass("Node name", 'Set to "' + c.longName + '"' + (c.shortName ? " (" + c.shortName + ")" : "") + "."));

    var r = c.role;
    if (r === 0 || r === 1 || r === 12) out.push(pass("Device role", "Set to " + ROLES[r] + "."));
    else if (r === 2 || r === 4 || r === 11) out.push(warn("Device role", "Set to " + ROLES[r] + ". Only use this for a genuinely well-placed fixed node, and give the admins a shout on Discord first."));
    else if (r === 3) out.push(warn("Device role", "Set to ROUTER_CLIENT, which is deprecated and gone from current firmware. Switch to CLIENT."));
    else out.push(warn("Device role", "Set to " + (ROLES[r] || r) + ", a special-purpose role. Fine if that's on purpose."));

    if (c.mqttEnabled) out.push(warn("MQTT", "MQTT uplink is switched on. The Welsh Mesh doesn't use MQTT, you most likely want it off."));
    else out.push(pass("MQTT", "Off, as it should be for the Welsh Mesh."));

    if (c.primaryDefaultKey === false) out.push(warn("Primary channel", "Your main channel has a custom key, so you won't be on the public Welsh Mesh channel. Grand for a private group, but for general traffic use the default LongFast channel."));
    else if (c.primaryDefaultKey === true) out.push(pass("Primary channel", "Using the default public channel."));

    return out;
  }

  // --- rendering ---
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }

  function render(box, checks) {
    var icon = { pass: "✅", warn: "⚠️", fail: "❌" };
    var passes = 0, fails = 0, warns = 0;
    checks.forEach(function (c) { if (c.level === "pass") passes++; else if (c.level === "fail") fails++; else warns++; });

    var headline = fails === 0 && warns === 0
      ? "Spot on. Your node's set up right for the Welsh Mesh."
      : fails === 0 ? "Looking good, just a couple of things worth a second look."
      : "A few things to sort before you're properly on the mesh.";

    var tally = passes + "/" + checks.length + " good" +
      (fails ? ", " + fails + " to fix" : "") + (warns ? ", " + warns + " to check" : "");

    var html = '<div class="nwm-check-summary">' + esc(headline) +
      ' <span class="nwm-check-tally">(' + esc(tally) + ")</span></div>";
    checks.forEach(function (c) {
      html += '<div class="nwm-check-row nwm-check-' + c.level + '">' +
        '<span class="nwm-icon">' + icon[c.level] + "</span>" +
        '<span class="nwm-text"><strong>' + esc(c.title) + "</strong><span>" + esc(c.detail) + "</span></span></div>";
    });
    box.innerHTML = html;
    box.hidden = false;
  }

  function handleFile(file, box) {
    box.hidden = false;
    box.innerHTML = '<div class="nwm-check-summary">Reading ' + esc(file.name) + "…</div>";
    file.arrayBuffer().then(function (buf) {
      try { render(box, runChecks(extract(new Uint8Array(buf)))); }
      catch (e) { box.innerHTML = '<p class="nwm-check-error">Sorry, couldn\'t read that file. Make sure it\'s a <code>.cfg</code> exported from the Meshtastic app.</p>'; }
    }).catch(function () {
      box.innerHTML = '<p class="nwm-check-error">Couldn\'t open that file. Give it another go?</p>';
    });
  }

  function init() {
    var root = document.getElementById("nwm-check-setup");
    if (!root || root.dataset.ready) return;
    root.dataset.ready = "1";

    var input = document.getElementById("nwm-check-file");
    var drop = root.querySelector(".nwm-check-drop");
    var box = document.getElementById("nwm-check-results");

    input.addEventListener("change", function () {
      if (input.files && input.files[0]) handleFile(input.files[0], box);
    });
    ["dragenter", "dragover"].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("nwm-dragover"); });
    });
    ["dragleave", "drop"].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove("nwm-dragover"); });
    });
    drop.addEventListener("drop", function (e) {
      if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0], box);
    });
  }

  // Run on first load and on every instant navigation
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(function () { init(); });
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
