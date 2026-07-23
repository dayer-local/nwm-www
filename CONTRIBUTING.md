# Contributing to the New Welsh Mesh

First off, cheers for wanting to help. The New Welsh Mesh isn't a company or a product, it's a community network held together by people running radios and lending a hand. It only keeps going if people pitch in, so anything you do here genuinely matters.

This guide is about helping with the **website**. If you want to help with the actual mesh, running a node or a repeater, start on the [Get Involved](docs/docs/get-involved.md) page instead.

## Ways to help

- **Fix something that's wrong.** Typos, dead links, out-of-date guides, or advice that's just plain incorrect. If you spot it, you can fix it.
- **Say hello.** Running a node? Let us know on the [Discord](https://discord.gg/4VhKqbH39W) so the rest of us know you're out there.
- **Write or improve a guide.** If there's something you had to figure out the hard way, write it up so the next person doesn't have to.
- **Help on Discord.** Not everything is a code change. Answering questions and welcoming new people is worth just as much. [Come and join us.](https://discord.gg/4VhKqbH39W)

## Editing a page (the easy way)

You don't need to know Git or clone anything. Every page on the site has an **edit button**, the little pencil icon in the top right.

1. Click it. It'll take you to that page's source on GitHub.
2. Make your change. GitHub will fork the repo for you the first time.
3. Scroll down, describe what you changed, and open a pull request.
4. It'll get a quick review, then it's live.

That's it. If you'd rather not touch GitHub at all, just tell us on the Discord and someone will make the change for you.

## Editing locally (the proper way)

If you want to preview your changes before sending them, the site is built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

```bash
pip install mkdocs-material
mkdocs serve
```

Then open `http://127.0.0.1:8000` and the site updates live as you edit. When you're happy, open a pull request against `main`. Pushing straight to `main` auto-deploys the live site, so everything goes through a pull request first.

## How we write

This is the important bit. The New Welsh Mesh sounds like a person, not a brochure. When you write for the site, keep it:

- **Plain and honest.** Say what you mean. If something's fiddly or half-finished, just say so.
- **Friendly, not formal.** Write like you're explaining it to a mate, not filing a report.
- **Practical.** Real advice, real prices, real trade-offs. No filler.
- **Free of corporate speak.** No "leveraging synergies" or "seamless experiences". If it reads like a marketing email, rewrite it plainly.

Don't worry about it being perfect. A helpful guide with a rough edge or two is better than a polished one that says nothing.

## Keep the facts straight

A few things need to stay consistent across the whole site so nobody ends up with bad info:

- **Region:** always `EU_868`. It's the legal band for the UK. Never suggest anything else.
- **Modem preset:** `LONG_FAST`. It's the Welsh Mesh standard.
- **Hop limit:** `4`, and no higher. There's a whole section on why over on [Mesh Etiquette](docs/docs/mesh-etiquette.md).
- **Antennas:** never tell anyone to power a node on without one. It fries the radio.

## Questions?

Not sure about something? Ask on the [Discord](https://discord.gg/4VhKqbH39W). Better to ask than guess.
