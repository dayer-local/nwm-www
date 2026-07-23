# FAQ & Troubleshooting
*Common questions, and what to try when something's not working*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

## Frequently Asked Questions

### Is it free?
Yes. There's no subscription and no monthly cost. You buy a device once, a starter node is around £20, and that's it. No SIM, no data plan, nothing.

### Do I need a licence?
No. The Welsh Mesh runs on **EU_868**, which is a licence-free band in the UK. You don't need an amateur radio licence or any kind of permit. Just set your region correctly and stick to the standard settings.

### Do I need internet or a phone signal?
No, that's the whole point. The mesh is radio, node to node, so it keeps working when the phone networks don't. You only need the internet if you want to link a node to the wider world through an MQTT gateway, which is optional. P.S. The New Welsh Mesh does NOT have an active MQTT server, if you see one, its not official and should not be trusted

### What range will I get?
Honest answer: it depends. LoRa is line of sight, so terrain matters more than anything. Two nodes with a clear view of each other can reach several kilometres. In a built-up area with buildings in the way, it'll be a lot less. The mesh works around this by passing messages through other nodes, so the more nodes there are, the better the reach for everyone.

### How big is the mesh?
It's early days and still growing, mostly around Tonyrefail and the wider Rhondda at the moment. Come and ask on the [Discord](https://discord.gg/4VhKqbH39W) to see who's about.

### Is what I send private?
Not on the default channel. The main public channel uses a known key, so anyone on the mesh can read it. Treat it like a public space. If you want a private conversation, set up a separate channel with your own shared key. There's more on that in [Mesh Etiquette](mesh-etiquette.md).

### Which device should I buy?
If you're not sure, get a Heltec V3. The [Node Choices](node-choices.md) page goes through all the common options and what they're good for.

### Why Meshtastic and not something else?
Mostly down to preference. There are other mesh systems out there, but we use Meshtastic for the ease of use and the community around it. There's a bit more on that at the bottom of the [home page](../index.md).

### Do you have an MQTT server
No, we will never ever host an MQTT server for our mesh network, yes its great for communitcating long distance however we don't see the point of using MQTT because it defeats the entire purpose of LoRa Meshes. The point of the mesh is to connect via an offline, off-grid, secure mesh system, and using the internet ruins that.

### How do I know my node's set up right?
Export your config from the Meshtastic app and drop it into our [Setup Checker](../check-setup.md). It reads your settings right there in your browser, nothing gets uploaded, and tells you whether your region, preset, hop limit and name are how the Welsh Mesh needs them.

## Troubleshooting

### My node won't connect over Bluetooth
- Make sure you're using the official **Meshtastic app**.
- If your board has no screen, the default pairing PIN is almost always **123456**.
- Turn Bluetooth off and on, and try removing the device from your phone's Bluetooth list and pairing again.
- Some boards only show up once they've fully booted, so give it a moment.

### I can't see any other nodes
- Check your **region is EU_868** and your **modem preset is LONG_FAST**. If these don't match the rest of the mesh, you won't hear anyone.
- You only hear nodes that are in range, or that another node relays to you. If you're the only node in your area, there may just be nobody to hear yet.
- Make sure your antenna is actually connected.
- Give it time. Nodes announce themselves every so often, they don't all show up instantly.

### My range is terrible
- Check the antenna is connected and is an **868 MHz** one, not a random spare.
- Get the node higher and away from walls and metal.
- See the [Antennas](antennas.md) page for the full rundown.

### My device won't flash
- Use a proper **data** USB cable. A lot of cheap cables are charge-only and won't work.
- The web flasher needs **Chrome or Edge**. It won't work in Firefox or Safari.
- If it still won't connect, try holding the boot button while you plug it in, then do a full erase and install.

### The battery drains really fast
- Turn down how often your node broadcasts its position, especially if it doesn't move.
- The screen and GPS use the most power. If you don't need them running constantly, that's the first place to look.

### My node still shows a default name like "Meshtastic 3a2f"
That's the factory default, change it. Give it a proper name so people know who you are. There's guidance on good names in [Mesh Etiquette](mesh-etiquette.md).

---

Still stuck? Ask on the [Discord](https://discord.gg/4VhKqbH39W). Someone will have hit the same thing before.
