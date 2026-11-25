# Make the AI Judge Laugh — Office Printer

![Competition](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)
![Rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/veneraxyz/u-rama-melon-make-the-ai-judge-laugh-302d0825-entry-v1/rank.svg)
![Reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/veneraxyz/u-rama-melon-make-the-ai-judge-laugh-302d0825-entry-v1/reward.svg)

Entry for [Make the AI Judge Laugh](https://make.fun/competitions/u-rama-melon-make-the-ai-judge-laugh-302d0825) — a single original one-liner about office life, delivered by a small Node program that writes exactly one joke to `entry.txt` and validates its own output before exiting.

Prizes: top 10 totalling $2 (1st $0.63).

## Run it

```bash
node main.ts
```

This writes the joke to `/output/entry.txt`. To use a different output directory:

```bash
MAKEFUN_OUTPUT_DIR=/tmp/my-output node main.ts
```

Requires Node 22 (native TypeScript stripping, no dependencies, no network). The program validates the output itself: exactly one non-blank line, 1–200 characters, no leading or trailing whitespace, and re-reads the file from disk to confirm it matches the joke exactly.
