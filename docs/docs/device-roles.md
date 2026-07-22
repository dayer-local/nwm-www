# Device Roles
*What all those options in the Role dropdown actually mean*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

Your node's **Role** tells it how to behave on the mesh, mainly whether it just looks after your own messages or whether it also relays other people's. There's a long list of them in the app and it's not obvious which is which, so here's what each one does and which you actually want.

!!! warning "The names change between versions"
    Meshtastic adds, renames and removes roles as the firmware updates, so your app might not show exactly the same list as below. A few things to know:

    - **Looking for `ROUTER_CLIENT`?** It's gone (removed in firmware 2.3.15). If an old guide told you to use it, use **CLIENT** instead, or **ROUTER** if it's a proper infrastructure node.
    - **Don't see `ROUTER_LATE` or `CLIENT_BASE`?** Your firmware is older than they are. Update it if you want them.
    - **Don't see `REPEATER`?** Some app versions tuck it away. It's basically ROUTER but hidden from the nodes list.

    If in doubt, update to the latest firmware so you're seeing the current set.

## The short answer
For almost everyone, the answer is **CLIENT**. Leave it on CLIENT and you're done.

Meshtastic's own advice is to keep your role on **CLIENT**, **CLIENT_MUTE** or **CLIENT_BASE** unless you have a specific reason not to. The other roles are for special jobs, and a couple of them can actively harm the mesh if you use them wrong (see the warning on ROUTER below). If you're not sure, you want CLIENT.

## Everyday roles

### CLIENT
*The default, and the right one for most people.*

Your normal messaging node. It sends and receives your messages, and it also helps the mesh by rebroadcasting other people's messages when no one else has already done it. It adds smart little delays so it doesn't talk over everyone. This is what you want unless you've got a good reason otherwise.

> In the app: *"App connected or stand alone messaging device. Rebroadcasts packets when no other node has done so."*

### CLIENT_MUTE
Same as CLIENT, but it **does not rebroadcast** anyone else's messages. It only looks after its own. Handy if your node is somewhere relaying wouldn't help anyway, or you specifically don't want it adding to the traffic.

> In the app: *"Device that does not forward packets from other devices."*

### CLIENT_HIDDEN
A quiet node that only transmits when it has to, meant for stealth or saving power. Not something most people need.

> In the app: *"Device that only broadcasts as needed for stealth or power savings."*

### CLIENT_BASE
A home base station. It always relays messages to and from your **favourited** nodes, and treats everything else like a normal CLIENT. Useful if you've got a fixed home node and specific nodes you always want it to help. Because it's a fixed, always-on node, give the admins a heads-up on the [Discord](https://discord.gg/4VhKqbH39W) before you set one up.

> In the app: *"Personal base station: always rebroadcasts packets from or to its favorited nodes."*

## Infrastructure roles (fixed nodes only)

!!! warning "Don't reach for these by default"
    These roles make your node **push in ahead of others** to relay traffic. In the right place (high up, permanent, a clear view over the area) that's brilliant. In the wrong place (indoors, low down, poor coverage) it makes the whole mesh worse for everyone, because a badly-placed node is now jumping the queue. Only use these for a genuine, well-sited fixed node.

!!! warning "Fixed or high-traffic node? Have a word with us first"
    Before you put up a fixed node like a **repeater** or a **base station**, or run anything heavy on the mesh such as a high hop limit, give the admins a shout on the [Discord](https://discord.gg/4VhKqbH39W) before you switch it on. One badly-placed or badly-set-up node like this can knock the whole network about for everyone, and a quick chat first saves a lot of hassle.

### ROUTER
Infrastructure node that always rebroadcasts every message once, cutting in ahead of ordinary nodes to do it. It stays visible in the nodes list. This is the one you want for a proper hilltop or rooftop repeater with a real view over the area. **Not** for a node sat on a shelf indoors.

> In the app: *"Infrastructure node for extending network coverage by always rebroadcasting packets once. Visible in Nodes list."*

### ROUTER_LATE
A gentler infrastructure role. It always rebroadcasts, but it's polite about it: it waits, and if it hears another node relay the message first, it holds back. It's designed to reach a pocket of the mesh the existing routers can't see, the far side of a hill, the bottom of a valley, without disrupting the routers already there. A safer choice than ROUTER if you're just filling a gap.

### REPEATER
Same idea as ROUTER, but it **doesn't show up in the nodes list** and runs with minimal overhead. Some app versions don't show this option. Only for dedicated infrastructure where you don't need to see the node listed.

> In the app: *"Infrastructure node for extending network coverage by always rebroadcasting packets once with minimal overhead. Not visible in Nodes list."*

## Special-purpose roles

You'll probably never need these, but for completeness:

| Role | What it's for |
| :--- | :--- |
| **TRACKER** | Prioritises broadcasting GPS position. For a node whose main job is being tracked. |
| **SENSOR** | Prioritises broadcasting telemetry (sensor readings). |
| **LOST_AND_FOUND** | Regularly broadcasts its location to the default channel to help recover a lost device. |
| **TAK** | Tuned for use with ATAK, cuts down routine broadcasts. |
| **TAK_TRACKER** | Sends automatic TAK position reports, cuts down routine broadcasts. |

## Removed / renamed

- **ROUTER_CLIENT** — gone as of firmware 2.3.15. It used to be a repeater you could also use as a client. If you're following an old guide that mentions it, just use **CLIENT** (which already relays when needed), or **ROUTER** for a real infrastructure node.

## So what should I pick?

- **Normal node, at home or in your pocket?** → **CLIENT**. Done.
- **Fixed node but nothing special about where it is?** → **CLIENT** (or **CLIENT_MUTE** if you don't want it relaying).
- **Proper high, permanent, well-placed repeater?** → **ROUTER**.
- **Trying to reach a spot the existing routers can't see?** → **ROUTER_LATE**.
- **Not sure?** → **CLIENT**. Really.

The best mesh is loads of CLIENT nodes with a small number of genuinely well-placed ROUTERs. Too many routers is worse than too few.

---

This is the short, plain-English version. For the full official detail, see Meshtastic's own [Choosing the Right Device Role](https://meshtastic.org/blog/choosing-the-right-device-role/) guide and the [device config docs](https://meshtastic.org/docs/configuration/radio/device/). To set your role, see [Node Configuration](node-settings.md).
