import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One-liner dad joke: hinge word "feed" (social feed vs feeding the dog).
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LINE = "My daughter spends all day on her feed. I told her the dog has not eaten since breakfast. She liked his photo instead.";

mkdirSync(OUT, { recursive: true });
const target = `${OUT}/entry.txt`;
writeFileSync(target, LINE);
chmodSync(target, 0o644);
