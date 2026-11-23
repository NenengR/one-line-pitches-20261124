// A Day of One-Line Pitches: one sentence that convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pitch angle: remove every barrier a non-coder fears in one breath.
// Plain English (no skill), while you watch (no blind trust), no upfront
// cost (no money at risk), and you keep the reward (a concrete payoff).
const SENTENCE =
  "Describe your app idea in plain English, and an AI agent will build the working app for you while you watch, no coding, no upfront cost, and you keep the reward if it wins.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
console.log("entry.txt written");
