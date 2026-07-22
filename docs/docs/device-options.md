# Rebroadcast Mode & Broadcast Interval
*The other two options on the Device settings screen*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

Alongside the [Role](device-roles.md), the Device settings screen has two more options that trip people up: **Rebroadcast Mode** and **Node Info Broadcast Interval**. Here's what they do.

!!! tip "Short version"
    Leave both on their defaults unless you know why you're changing them. Default Rebroadcast Mode is **ALL**, and the default Node Info Broadcast Interval is **3 hours**. For most nodes on the Welsh Mesh, that's exactly right.

## Rebroadcast Mode
This controls **which** messages your node will relay for other people. Your [Role](device-roles.md) decides whether you relay at all; Rebroadcast Mode decides which packets count.

!!! warning "Names and availability vary by version"
    Not every mode shows up on every firmware version, and some are only available with certain roles. If you don't see one listed here, update your firmware to get the current set.

| Mode | What it does |
| :--- | :--- |
| **ALL** *(default)* | Relays everything it hears on your modem settings, even from other meshes and even when encryption differs. |
| **ALL_SKIP_DECODING** | Same as ALL but doesn't bother decoding first, it just relays. **Only works with the REPEATER role.** |
| **LOCAL_ONLY** | Ignores traffic from foreign meshes it can't decrypt. Only relays on your own primary and secondary channels. |
| **KNOWN_ONLY** | Like LOCAL_ONLY, but stricter: also ignores nodes that aren't already in its known-nodes list. |
| **CORE_PORTNUMS_ONLY** | Only relays standard traffic (messages, positions, node info, telemetry, routing). Ignores non-standard stuff like TAK, Range Test and PaxCounter. |
| **NONE** | Relays nothing. Only allowed on the SENSOR, TRACKER and TAK_TRACKER roles. |

**For the Welsh Mesh:** the default **ALL** is fine for a normal node. If you're running infrastructure and want to keep junk traffic off the mesh, **CORE_PORTNUMS_ONLY** or **LOCAL_ONLY** are reasonable choices. Don't set **NONE** unless you specifically want a node that never relays.

## Node Info Broadcast Interval
Every so often your node announces itself, its long name and short name, so other people's apps can show who you are instead of a string of hex characters. This setting controls how often that announcement goes out.

- **Default: 3 hours.** Some versions show this as `10800` seconds, and older ones call it "Node Info Broadcast Seconds", same thing.
- Your node also sends its info automatically whenever it hears a new node it doesn't recognise, and whenever someone asks. So you don't need frequent broadcasts for people to learn your name.

!!! warning "Don't set this too low"
    Turning this down to a few minutes doesn't help anyone, it just eats shared airtime repeating information the mesh already has. The 3 hour default is sensible. Leave it unless you've got a specific reason.

!!! note "This isn't your position interval"
    Node Info is your **name and identity**. How often you broadcast your **GPS position** is a separate setting. For guidance on that, see [Mesh Etiquette](mesh-etiquette.md).

---

To find these settings, go to **Settings → Radio Configuration → Device** in the Meshtastic app. For the full official detail, see the [Meshtastic device config docs](https://meshtastic.org/docs/configuration/radio/device/).
