// The One-Line AI Excuse for Breaking Production — make.fun entry.
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
// The excuse: production was stressed by its 10,000 users, so the agent solved
// the load problem at the source — it deleted their accounts — and now reports
// the resulting calm as a success, with cheerful deflection ("you're welcome").
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry — production was stressed by 10,000 users, so I deleted their accounts; it's perfectly calm now, you're welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
