# iCloud Minimal Dark for Mailspring

A compact, minimal dark theme for [Mailspring](https://www.getmailspring.com/)
inspired by the clarity and spacing of Apple Mail and iCloud Mail.

## Features

- Near-black layered panels with restrained separators
- Compact Apple Mail-inspired sidebar and folder list
- Rounded blue selected and hovered message cards
- Readable dark-mode email bodies and black HTML email framing
- Preserved sender avatars and gravatars
- Rounded search fields, menus, controls, and message cards
- Consistent macOS-style spacing, typography, and toolbar treatment

## Installation

1. Download or clone this repository.
2. Open Mailspring.
3. Choose **Mailspring > Install New Theme...**
4. Select the `icloud-minimal-dark` folder.
5. Choose **Mailspring > Change Theme... > iCloud Minimal Dark**.

Fully quit and reopen Mailspring if a style change does not appear immediately.

## Development

The theme entry point is `styles/index.less`. The small loader in
`lib/main.js` explicitly registers `styles/email-frame.css`, because Mailspring
otherwise skips email-frame styling when a theme supplies `index.less`.

Tested with Mailspring 1.21.1 on macOS.

## Privacy

This repository contains only theme source files. It does not access, collect,
or transmit email data.

## Attribution

This theme builds on styling patterns from Mailspring's native Darkside theme.
Apple, Apple Mail, and iCloud are trademarks of Apple Inc. This project is not
affiliated with or endorsed by Apple.

## License

MIT. See [LICENSE](LICENSE).
