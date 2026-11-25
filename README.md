# Field Card 01

[Complete repository directory tree](docs/DIRECTORY.md)

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
