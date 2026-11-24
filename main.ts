// Charm the Commuter: Forecast a City That Isn't
// One line of weather forecast (128 chars) for the invented city of
// Wobbleford, where the rain falls upwards. Writes the forecast to
// /output/entry.txt, the way the competition's gate expects it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "Today in Wobbleford: 19°C, light rain falling upwards. Commuters are advised to hold umbrellas upside down and smile at the sky.";

// Gate guard: the sealed scorer only accepts 1–140 characters of UTF-8
// text, so refuse to ship anything outside that range.
const length = [...FORECAST].length;
if (length < 1 || length > 140) {
  throw new Error(`forecast is ${length} characters, outside the 1–140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
