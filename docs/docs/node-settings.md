# Node Configuration
*Through the Meshtastic app*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

---

## Guide for Client Nodes

A **Client** node is your personal device, the one you carry around or keep at home for messaging and tracking. This is the most common setup.

### Prerequisites

Before you start, make sure you have:

* A Meshtastic device that's already been flashed with firmware. (See [Getting Started](getting-started.md))
* The **Meshtastic app** installed on your phone.
* Bluetooth enabled on your phone.

---

### Step 1: Connect via Bluetooth

1. Open the **Meshtastic app**.
2. **Add your device:**
    * **Android:** Tap the **+** icon in the bottom right.
    * **iOS:** Go to **Settings > Device**, then look for the Bluetooth menu.
3. Tap your radio from the list. It usually shows up as something like `Meshtastic_XXXX`.
4. Your device's screen will show a **6-digit pairing PIN**. Enter it on your phone to finish pairing.

!!! tip "No Screen?"
    If your board doesn't have a display, the default pairing PIN is almost always **123456**.

---

### Step 2: Set Your Region

This is important. You must set your region to **EU_868** before transmitting anything. It's the legally correct frequency band for the United Kingdom.

1. In the app, go to **Settings > Radio Configuration > LoRa**.
2. Find the **Region** setting and select **EU_868**.

!!! warning "Don't Skip This"
    Transmitting on the wrong frequency band is illegal. Set your region before you do anything else.

---

### Step 3: Set the Device Role to "Client"

1. Go to **Settings > Radio Configuration > Device**.
2. Find the **Role** dropdown and set it to **CLIENT**.

This is usually the default, but it's worth checking. Client mode means your device will send and receive messages, and will also help route packets from other nearby nodes.

---

### Step 4: Configure LoRa Settings

1. Go to **Settings > Radio Configuration > LoRa**.
2. Set **Modem Preset** to **LONG_FAST**. This is the standard preset for the Welsh Mesh and gives the best balance of range and speed.
3. Set **Hop Limit** to **4**.

!!! warning "Don't Crank the Hop Limit"
    A hop limit of 4 means your message can bounce through up to 4 other nodes. Higher values might seem better, but they congest the network for everyone. Stick to 4 unless you have a very good reason not to.

---

### Step 5: Save Your Settings

Tap the **Save** or **Send to Device** button (usually a paper airplane or save icon in the top right). Your node will reboot, and once it's back up it'll reconnect automatically.

That's it, you're on the mesh!

---

## Guide for Repeater Nodes

A **Repeater** (or Router) node is a fixed node, usually placed somewhere high up, that exists purely to extend the network's range. It doesn't need a user nearby; it just sits there and passes messages along.

### Prerequisites

* A Meshtastic device flashed with firmware.
* A stable power source (mains, solar, or a large battery).
* A good antenna suited for your mounting location.
* A high vantage point if possible, rooftops, hills, and tall buildings make a huge difference on LoRa.

---

### Step 1: Connect and Set Your Region

Same as the client guide. Connect via Bluetooth, then set your region to **EU_868** under **Settings > Radio Configuration > LoRa**.

---

### Step 2: Set the Device Role

This is where it differs from a client node.

1. Go to **Settings > Radio Configuration > Device**.
2. Set the **Role** to one of the following:

| Role | When to use it |
| :--- | :--- |
| **ROUTER** | Pure repeater. Prioritises routing traffic for others. Doesn't need a user. |
| **ROUTER_CLIENT** | Repeater that also lets you use it as a client occasionally. Good if you want to check in on the network remotely. |

For a dedicated fixed node, **ROUTER** is the right choice. If you plan to occasionally message through it, use **ROUTER_CLIENT**.

!!! note "Why not just use Client?"
    You could, but ROUTER mode tells the network to treat your node as infrastructure. Other nodes will prefer routing through it, and it handles packets more efficiently than a CLIENT node would.

---

### Step 3: Configure LoRa Settings

Same as the client setup:

1. Go to **Settings > Radio Configuration > LoRa**.
2. **Modem Preset:** `LONG_FAST`
3. **Hop Limit:** `4`

Keep it consistent with the rest of the Welsh Mesh so everything can talk to each other.

---

### Step 4: Power and Placement Tips

A repeater is only as good as where you put it. A few things worth thinking about:

* **Height matters more than anything.** LoRa is line-of-sight. Even a few extra metres of elevation can dramatically increase range. A rooftop will massively outperform a ground-level install.
* **Antenna quality counts.** The stock antenna on most boards is fine for a client node. For a fixed repeater, a proper external antenna with a good ground plane will serve you much better.
* **Keep it weatherproof.** If it's going outside, put it in a proper weatherproof enclosure. Most dev boards are not rated for outdoor exposure.
* **Solar is great, but size your panel correctly.** A small 5W panel is often not enough on its own for a node running 24/7, especially in Wales where the weather is, well, Welsh.

---

### Step 5: Save Your Settings

Same as before, tap **Save** or **Send to Device**. The node will reboot and come back up as a repeater.

If you've set up a repeater and want it listed on the Welsh Mesh, get in touch!

[Back to Getting Started](getting-started.md){ .md-button .md-button--primary }
