import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry I missed a spot — I got stuck under the couch and the dust bunnies held me hostage for crumbs.";

// Runtime guard: entry must be a single line within the 1–140 char gate.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(
    `Entry violates char gate: length=${entry.length}, hasNewline=${entry.includes("\n")}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
console.log(`chars: ${entry.length}`);
