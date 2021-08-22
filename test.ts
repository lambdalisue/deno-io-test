import * as io from "https://deno.land/std@0.100.0/io/mod.ts";

for await (const line of io.readLines(Deno.stdin)) {
  console.log(`Recv ${line.length}`);
  if (!line) {
    continue;
  }
  JSON.parse(line);
}
