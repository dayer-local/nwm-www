# Antennas
*The cheapest way to get more range*

---

!!! info "Information"
    This website is very beta. Many pages are broken or they just don't exist. Please be patient, I am only one person. Thanks!

The antenna matters more than almost anything else on your node. A good antenna in a good spot will beat a more expensive board with a bad one, every time. If you want more range, start here before you spend money on anything else.

!!! warning "Never power on without an antenna"
    Powering a node on with no antenna connected can fry the radio chip. It's not a maybe. Always have the antenna on before you plug it in.

## Match the frequency
This is the most common mistake. Your antenna has to be tuned for the band you're transmitting on, which on the Welsh Mesh is **868 MHz** (EU_868).

A 915 MHz antenna, a 433 MHz antenna, or the little 2.4 GHz WiFi antenna off an old router will all work badly or not at all. If you're buying one, look for **868 MHz** or **863–870 MHz** in the listing.

## Connectors
Different boards use different antenna connectors. The two you'll run into most:

| Connector | Found on | Notes |
| :--- | :--- | :--- |
| **U.FL / IPEX** | Heltec V3, smaller boards | Tiny and fiddly, easy to damage. Often paired with a pigtail adapter out to SMA. |
| **SMA / RP-SMA** | T-Beam, larger boards | Screw-on and much easier to work with. |

If your board has a U.FL connector and you want a proper external antenna, grab a **U.FL to SMA pigtail** so you can screw a normal antenna on.

!!! tip "SMA vs RP-SMA"
    They look almost identical but the centre pin is different. If an antenna won't screw on properly, or screws on but doesn't work, check you've got the matching type.

## Gain and placement
- **Height beats everything.** LoRa is basically line of sight. Getting your antenna a few metres higher, or up to a window instead of down on a desk, does more than any antenna upgrade. For a fixed node, up high and outside wins.
- **A little gain helps, but don't overthink it.** A decent 868 MHz antenna somewhere in the 2–5 dBi range is plenty for most people. Very high gain antennas squash the signal into a flat disc, which is great on a hilltop but can miss nodes above or below you.
- **Keep it clear of metal and walls.** Radiators, foil-backed insulation, metal window frames and thick stone all soak up signal. The more open air around the antenna, the better.

## Fixed and outdoor nodes
If you're putting a node outside as a repeater, a few extra things matter:

- **Use a proper outdoor antenna** with a good ground plane, not the little stock whip.
- **Keep the cable short.** Coax loses signal, and cheap thin coax loses a lot of it. If you need a longer run, use decent low-loss cable.
- **Weatherproof everything.** Seal the connectors against water, especially where the cable meets the antenna. Water in a connector will wreck your range.

---

The stock antenna that comes with your board is fine to get started, so don't feel you have to upgrade straight away. When you're ready to push for more range, a better antenna and a better position are the first things to sort. For help picking a board, see [Node Choices](node-choices.md), and to set your node up, see [Node Configuration](node-settings.md).
