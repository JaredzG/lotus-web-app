import type { APIRoute } from "astro";
import type { GridEntry } from "@/components/react/Grid";

export const GET: APIRoute = () => {
  const gridEntries: GridEntry[] = new Array<GridEntry>();
  let dataSet = new Set<GridEntry>([
    { base: 3, pow: 1, value: 3 },
    { base: 3, pow: 2, value: 9 },
    { base: 3, pow: 3, value: 27 },
    { base: 3, pow: 4, value: 81 },
    { base: 4, pow: 1, value: 4 },
    { base: 4, pow: 2, value: 16 },
    { base: 4, pow: 3, value: 64 },
    { base: 4, pow: 4, value: 256 },
    { base: 5, pow: 1, value: 5 },
    { base: 5, pow: 2, value: 25 },
    { base: 5, pow: 3, value: 125 },
    { base: 5, pow: 4, value: 625 },
    { base: 6, pow: 1, value: 6 },
    { base: 6, pow: 2, value: 36 },
    { base: 6, pow: 3, value: 216 },
    { base: 6, pow: 4, value: 1296 },
  ]);
  while (dataSet.size > 0) {
    const deleteIndex = Math.floor(Math.random() * dataSet.size);
    const dataArray = Array.from(dataSet);
    gridEntries.push(dataArray[deleteIndex]);
    dataArray.splice(deleteIndex, 1);
    dataSet = new Set<GridEntry>(dataArray);
  }

  return new Response(
    JSON.stringify({
      data: gridEntries,
    })
  );
};
