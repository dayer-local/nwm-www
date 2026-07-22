# Mesh Etiquette & Best Practices
*How to be a good node operator on the Welsh Mesh*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

The Welsh Mesh only works well when everyone uses it responsibly. None of this is complicated, it's mostly just common sense, but it's worth spelling out.

---

## Radio Settings

### Use LONG_FAST
Always set your **Modem Preset to LONG_FAST**. It's the standard for the Welsh Mesh and the default Meshtastic public channel. If you're running a different preset, your node won't communicate properly with the rest of the network.

### Keep Hop Limit at 4 or Below
The hop limit controls how many nodes your message can bounce through before it's dropped.

* **Default:** 3 hops
* **Welsh Mesh recommended:** 4 hops
* **Maximum:** 4 hops

Don't go higher than 4. Every extra hop means your message gets re-broadcast by more nodes, which uses up airtime that everyone shares. A high hop limit doesn't just affect you, it slows down the entire network for everyone in range.

!!! warning "Seriously, Don't Crank It"
    Setting your hop limit to 7 because you want "better range" doesn't give you better range. It just floods the mesh with redundant packets and makes the network worse for everyone. 4 is the ceiling for a reason.

---

## Your Node Identity

### Pick a Proper Name
When you set up your node, give it a name that's short, clear, and actually identifies you or your location. The mesh is a community network and people need to know who they're talking to.

**Good names:**
* `Fin - Tonyrefail`
* `NWM-Gateway-01`
* `Rhondda Hilltop`

**Bad names:**
* `Meshtastic 3a2f` (the default, change it)
* `node` 
* `aaaaaaaaaaaaaa`
* `test`

Your short name (the 4-character ID shown in the app) should also be something recognisable, not just the default hex characters.

### Don't Impersonate Other Nodes
Don't set your node name to match someone else's. It causes confusion, makes the network unreliable for people trying to route messages, and is just a dick move. If you're not sure what names are already in use, send a message on the mesh and ask.

---

## Network Behaviour

### Use the Right Device Role
By default your node should be set to **CLIENT**. It's tempting to set a fixed node to **ROUTER** to "help the mesh", but a ROUTER in a poor spot (indoors, low down) actually makes things worse: it pushes in ahead of everyone else to relay, from a position that can't relay well. Only use ROUTER for a genuinely high, permanent, well-placed node. If in doubt, stay on CLIENT. There's a full explanation on the [Device Roles](device-roles.md) page.

!!! warning "Fixed or high-traffic node? Have a word with us first"
    Before you put up a fixed node like a **repeater** or a **base station**, or run anything heavy on the mesh such as a high hop limit, give the admins a shout on the [Discord](https://discord.gg/4VhKqbH39W) before you switch it on. One badly-placed or badly-set-up node like this can knock the whole network about for everyone, and a quick chat first saves a lot of hassle.

### Don't Flood the Network
LoRa is a shared, low-bandwidth radio channel. Everyone in range is sharing the same airtime. Keep that in mind.

* Don't send the same message over and over.
* Don't run automated scripts that hammer the mesh with test packets unless you've told the community and you're doing it off-peak.
* Don't send large or frequent position updates if you're stationary. If you're sat at home, your GPS position doesn't need to broadcast every 30 seconds.

### Keep Position Intervals Sensible
If your node is **fixed** (a home node, a repeater, anything that doesn't move), set your position broadcast interval to something reasonable, 15 to 30 minutes is plenty. There's no point in a stationary node screaming its GPS coordinates at the mesh every minute.

If you're **mobile**, more frequent updates make sense, but even then every 2-5 minutes is usually fine.

### Test Messages
If you're testing your setup, that's totally fine. Just be aware that test messages go out to the whole mesh. A couple of "hello, testing" messages is no problem. Sending 50 in a row is not great. If you need to do heavy testing, let people know on the mesh first.

---

## Channels and Communication

### Keep the Default Channel for General Use
The default channel (`LongFast` / Channel 0) is the public channel everyone's on. Use it for general mesh traffic, check-ins, and community messages. If you want a private conversation or a channel for a specific group, set up a secondary channel with a shared key, and use that instead.

### Be Decent
It sounds obvious but: don't use the mesh to harass people, spread garbage, or cause problems. It's a small community network. Everyone can see what you're sending on the public channel.

---

## Hardware

### Always Use an Antenna
Never power on your node without an antenna connected. You will fry the RF chip. It's not a maybe, it's a when.

### Label Your Nodes
If you're running a fixed repeater node somewhere accessible to other people (a rooftop, a shared location, etc.) put a label on it with your contact info. If something goes wrong, people need to know who to call.

---

Following these guidelines keeps the Welsh Mesh reliable and usable for everyone. If you've got questions or you're not sure about something, just ask on the mesh.
