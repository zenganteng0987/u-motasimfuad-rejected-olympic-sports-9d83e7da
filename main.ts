import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Competitive Queueing: athletes stand in line for four hours; gold goes to the first to reach the front without once checking their phone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
