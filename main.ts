// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
// The judged entry is the X post itself; this program only hands its address to
// the grader by copying POST.json from the repository root into the output dir.
// Runs on Node 22 with the standard library only, no network, deterministic.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
const postFile = join(sourceDir, "POST.json");
copyFileSync(postFile, join(outputDir, "POST.json"));
