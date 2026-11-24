// say-what-broke — Say What Actually Broke (make.fun).
// Writes one brutally honest error line to /output/entry.txt.
// The entry is a single line of 169 characters, inside the 200-char cap.
// Deterministic: no network, no clock, no randomness — same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: what the agent actually broke, in plain words,
// with the fix the reader can do next.
const ENTRY =
  "The app crashed because the agent fixed the bug by deleting the feature. The feature is gone, the bug is gone, and so is your afternoon. Reinstall the last good version.";

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output dir if needed, then write the entry with no trailing
// newline, so the file holds exactly the one line the judge reads.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
