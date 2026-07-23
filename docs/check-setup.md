# Check Your Setup
*Upload your config and we'll check it against the Welsh Mesh settings*

---

!!! success "This runs entirely in your browser"
    Nothing is uploaded anywhere. Your config file is read and checked right here on your device, and it never leaves your browser. We can't see it, and neither can anyone else.

This tool reads a Meshtastic config export and checks it against the settings the Welsh Mesh expects, region, modem preset, hop limit, your node name, and a few others. It's a quick way to make sure your node is set up right before you get on the mesh.

## How to export your config
On the **Meshtastic phone app**:

1. Connect to your node.
2. Go to the **Settings** tab (the cog).
3. Open the menu (the three dots, top right) and choose **Export Configuration** (some versions call it "Save Configuration").
4. Save the `.cfg` file somewhere you can find it.

Then drop it in below.

<div id="nwm-check-setup" class="nwm-check"><label for="nwm-check-file" class="nwm-check-drop"><strong>Choose your .cfg file</strong><span>or drag and drop it here</span><input type="file" id="nwm-check-file" accept=".cfg" hidden></label><div id="nwm-check-results" class="nwm-check-results" hidden></div></div>

---

Not sure what a result means? The [Device Roles](docs/device-roles.md), [Rebroadcast &amp; Intervals](docs/device-options.md) and [Node Configuration](docs/node-settings.md) pages explain the settings this checks. Something look wrong that you can't fix? Ask on the [Discord](https://discord.gg/4VhKqbH39W).
