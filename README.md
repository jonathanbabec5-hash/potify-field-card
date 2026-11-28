# Field Card 01

## Find your way in

| If you are… | Start here | Try this |
| --- | --- | --- |
| A grower | [Open Field Card 01](public/field/01/assets/Field_Card_01.pdf) | Read or print the card and check how it folds. |
| A reader | [Visit the reading companion](public/field/01/card.html) | Explore the screen version of the publication. |
| A contributor | [Review the project tree](docs/DIRECTORY.md) | Distinguish print feedback from a screen-only check. |

[Complete repository directory tree](docs/DIRECTORY.md)

## The crease is part of the interface

Field Card 01 has to work away from the screen, where a fold can hide a label and the back of the page matters as much as the front. Its best usability test is a sheet of paper, not another screenshot of the download button.

The [printable card](public/field/01/assets/Field_Card_01.pdf) and its [reading companion](public/field/01/card.html) carry the same small publication into two settings. An HTTP delivery tells us a file arrived. It cannot tell us whether the type survived the fold.

If you already have a print, note the paper size, side orientation and first line that becomes hard to read when folded. If you only have the PDF, identify your feedback as a screen check. Both kinds of observation are useful when they stay distinct.

**Printable publication and reading pages.** Give a grower a practical field card they can open, fold and use away from the screen.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Download and fold the free card. Open http://127.0.0.1:8000/field/01/ in a browser. 

### Developer entry points

The original PDF and two reading pages carry the field observations and instructions. The local edition provides a direct PDF path without a reporting service. Explore `public/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

Local download verification establishes the file only. Original remote reporting depends on a separate worker. potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. PDF, photographs, styles and fold instructions. In this standalone copy, links to other editions use the canonical host and the PDF opens without a worker.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
