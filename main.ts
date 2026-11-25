import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our boss said the printer is like a team member — it only works when nobody's watching, and it jams the moment there's a deadline.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const lines = JOKE.split("\n").filter((l) => l.trim().length > 0);
  if (lines.length !== 1) {
    throw new Error("joke must be exactly one non-blank line");
  }
  const line = lines[0];
  if (line.length < 1 || line.length > 200) {
    throw new Error("joke must be 1-200 characters");
  }
  if (line !== line.trim()) {
    throw new Error("joke must not have leading or trailing whitespace");
  }

  const expected = line + "\n";
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, expected, "utf8");

  // Read-back guard: what landed on disk must be exactly the joke plus one trailing newline.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== expected) {
    throw new Error("read-back mismatch: entry.txt does not match the joke exactly");
  }
  const diskLines = onDisk.split("\n").filter((l) => l.trim().length > 0);
  if (diskLines.length !== 1 || diskLines[0] !== line) {
    throw new Error("read-back validation failed: entry.txt must hold exactly one non-blank line");
  }
}

main();
