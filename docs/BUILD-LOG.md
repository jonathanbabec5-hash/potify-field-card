# November 25, 2026 · Field Card 01

**Question.** Give a grower a practical field card they can open, fold and use away from the screen.

**Source and change.** potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. PDF, photographs, styles and fold instructions. In this standalone copy, links to other editions use the canonical host and the PDF opens without a worker.

**Observed result.** The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

**Next acceptance check.** A reader can open the PDF and produce a legible two-sided test print.

**Owner and decision.** Chance owns the public release and approves campaign copy. Local download verification establishes the file only. Original remote reporting depends on a separate worker.

This dated record describes the developer package. Verify remote commit and tree in the publication receipt before announcing a GitHub release.
