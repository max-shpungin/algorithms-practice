/**
 * Given an array, return the count of items. Implemented recursively.
 */

function recursiveCount(arr: any[]): number {
  if (arr.length === 0) return 0;

  const rest = arr.slice(1);
  return 1 + recursiveCount(rest);
}

console.log(recursiveCount([4,'a',5]));