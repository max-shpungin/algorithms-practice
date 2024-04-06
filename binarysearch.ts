/**
 * Performs a binary search on an array of elements and a target element.
 * Returns the index of the target element if found in the array, else null
 */

function binarySearch(arr: number[], target: number): number | null {

  let low = 0;
  let high = arr.length - 1;
  let guess: number;

  while (low <= high) {
    guess = Math.floor((low + high) / 2);

    if (arr[guess] === target)
      return guess;
    else if (arr[guess] > target)
      high = guess - 1;
    else
      low = guess + 1;
  }

  return null;
}

const arr: number[] = [1, 3, 5, 7, 9];

// console.log(binarySearch(arr, 9));

export default binarySearch;
