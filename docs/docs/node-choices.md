# Node Choices
*Picking the right hardware for the Welsh Mesh*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

There are a lot of Meshtastic-compatible boards out there and it can be overwhelming when you're starting out. This page breaks down the most common options and what they're actually good for.

Prices are approximate and will vary depending on where you buy. AliExpress is usually the cheapest source, Amazon and UK sellers will cost more but arrive faster.

---

## Quick Comparison

| Device | Best For | Screen | GPS | Approx Price |
| :--- | :--- | :--- | :--- | :--- |
| **Heltec V3** | General use, beginners | Small OLED | No | ~£20 |
| **Heltec Wireless Tracker** | Portable tracking | Small OLED | Yes | ~£25 |
| **LilyGo T-Beam** | GPS tracking, portable | Optional OLED | Yes | ~£35 |
| **LilyGo T-Echo** | Ultra low power, hiking | E-Ink | Yes | ~£45 |
| **LilyGo T-Deck** | Full handheld terminal | Large touch | Yes | ~£60 |
| **RAK WisBlock** | Solar, outdoor installs | No | Optional | ~£40+ |
| **Seeed Wio-WM1110** | Outdoor, rugged use | No | Yes | ~£30 |

---

## The Boards

### Heltec V3
**Best for: Beginners, general home and portable use**

The Heltec V3 is the most popular starter board and what most people on the Welsh Mesh are running. It's cheap, well supported, and has a small OLED screen so you can actually see what's happening without needing a phone nearby.

It runs off USB or a single 18650 battery, and it's small enough to throw in a pocket. The antenna connector is U.FL (also called IPEX), so you'll want to pick up a small external antenna or a pigtail adapter to get the most range out of it.

**Pros:**
* Very cheap
* Great community support
* OLED screen built in
* Works out of the box

**Cons:**
* No GPS
* Stock antenna is average
* U.FL connector is fiddly

---

### Heltec Wireless Tracker
**Best for: Portable use where you want GPS**

Basically a Heltec V3 with a GPS chip added. Same small form factor and OLED screen, but now it can broadcast your position without needing your phone's GPS. Good if you want a standalone tracker you can stick in a bag.

**Pros:**
* Built-in GPS
* Similar price to the V3
* Compact

**Cons:**
* GPS lock can be slow indoors
* Battery life takes a hit with GPS active

---

### LilyGo T-Beam
**Best for: GPS tracking, vehicle use**

The T-Beam is a bigger board with a proper GPS module, an 18650 battery holder, and an SMA antenna connector (which is much easier to work with than U.FL). It's a popular choice for putting in a car or backpack because the GPS is reliable and the battery life is decent.

Later versions (T-Beam Supreme) have improved power management, which is worth the slight price increase if you can find one.

**Pros:**
* Reliable GPS
* SMA antenna connector
* Good battery life
* Solid build

**Cons:**
* Bigger and bulkier than the Heltec
* Slightly pricier

---

### LilyGo T-Echo
**Best for: Hiking, low power, long battery life**

The T-Echo uses an e-ink display instead of an OLED, which means it barely uses any power when showing a static screen. Paired with a small LiPo battery it can run for days. It's got GPS built in and comes in a reasonably compact package.

If you're heading out into the hills and want a node that'll last a weekend on one charge, this is the one to look at.

**Pros:**
* Exceptional battery life
* E-ink screen is readable in sunlight
* Built-in GPS
* Compact with a case available

**Cons:**
* More expensive
* E-ink refresh rate is slow (not a problem for mesh use)
* Less common, so slightly less community support

---

### LilyGo T-Deck
**Best for: Using the mesh without a phone**

The T-Deck is a proper handheld device, it has a large touchscreen, a physical QWERTY keyboard, GPS, and a speaker. You can send and receive messages, view the node list, and navigate the mesh entirely without your phone.

It's overkill for most people and it's not cheap, but if you want a dedicated handheld mesh terminal it's the best option available right now.

**Pros:**
* Fully standalone, no phone needed
* Large touchscreen
* Physical keyboard
* GPS and speaker built in

**Cons:**
* Expensive
* Bulky compared to other options
* Battery life is shorter due to the screen

---

### RAK WisBlock
**Best for: Fixed outdoor installs, solar nodes**

The RAK WisBlock is a modular system, you pick a base board and add modules for GPS, displays, sensors, and so on. It's not the most beginner-friendly option because of the modular nature, but it's very popular for permanent outdoor installs because the power management is excellent and it handles solar input well.

If you're setting up a hilltop repeater or a solar-powered gateway, this is worth considering.

**Pros:**
* Excellent power management
* Great for solar
* Industrial-grade build quality
* Modular, so you only pay for what you need

**Cons:**
* More complex to set up
* Can get expensive with modules
* No screen by default

---

### Seeed Wio-WM1110
**Best for: Outdoor use, rugged installs**

A relatively newer option from Seeed Studio. It's got GPS, decent range, and is designed with outdoor use in mind. It's a solid board but doesn't have as large a community as the Heltec or LilyGo options yet, so finding help if something goes wrong is harder.

---

## What Should I Buy?

If you're not sure, just get a **Heltec V3**. It's the cheapest option, it works, and if you decide Meshtastic isn't for you, you're only down £20.

If you know you want GPS, go for the **T-Beam**. If you're planning a permanent outdoor install, look at the **RAK WisBlock**.

!!! note "Where to Buy"
    AliExpress is the cheapest source for most of these boards, usually shipping direct from the manufacturer. Expect 2-4 weeks delivery. For faster shipping, some boards are available on Amazon UK or through specialist electronics retailers like Pimoroni or Cool Components.
