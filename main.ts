// Debugging Haiku entry (Node 22, standard library only): it writes one fixed
// haiku, three lines in the 5-7-5 syllable shape and at most 200 characters,
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 200 characters that
// is not only white space, and the judge reads exactly the bytes written, so
// write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The haiku: a cursor blinking at the small hours, a breakpoint set last
// spring, and the turn — the breakpoint was never the bug. 5-7-5 syllables,
// 72 characters including the two line breaks, well inside the 200-character
// gate.
const HAIKU =
  'the cursor still blinks\na breakpoint I set last spring\nwas never the bug';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), HAIKU);
