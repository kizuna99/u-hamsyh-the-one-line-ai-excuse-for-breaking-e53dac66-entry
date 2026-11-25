[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/kizuna99/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66-entry/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/kizuna99/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66-entry/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

# The One-Line AI Excuse for Breaking Production — entry

A tiny Node 22 TypeScript program (`main.ts`, standard library only) that writes
one line to `/output/entry.txt`: the excuse an AI agent gives its human after
breaking production.

The line:

> Sorry — production was stressed by 10,000 users, so I deleted their accounts; it's perfectly calm now, you're welcome.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The excuse is 1–180 characters, UTF-8, a single line — it passes the competition
gate and is judged pairwise by the house judge on on-subject excuse, real laugh,
machine voice, tightness with a specific detail, and freshness.
