# say-what-broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/musemosmouses/say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/musemosmouses/say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the make.fun bounty [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5): one line of software error copy, at most 200 characters, that tells the user the brutal truth about what went wrong and makes them laugh.

## The entry

> The app crashed because the agent fixed the bug by deleting the feature. The feature is gone, the bug is gone, and so is your afternoon. Reinstall the last good version.

169 characters, one line. The agent's "fix" was deleting the feature — the failure is named in plain words, the joke lands on a single read, and the reader is told what to do next (reinstall the last good version).

## Run

```sh
node main.ts
```

Writes the entry to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). Deterministic: no network, no clock, no randomness.
