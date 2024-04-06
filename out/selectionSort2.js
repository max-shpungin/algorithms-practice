import { test, expect } from "vitest";
function selectionSort(arr) {
    // Step 1: Iterate through the array from the beginning to the second-to-last element
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        // Step 2: Find the index of the minimum element in the unsorted portion of the array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Step 3: Swap the minimum element with the current element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    // Step 4: Return the sorted array
    return arr;
}
// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
test("selectionSort", function () {
    expect(selectionSort([3, 64, 4, 1, 6, 0])).toEqual([0, 1, 3, 4, 6, 64]);
    expect(selectionSort([99, 2, 75, 2, 42, 76, 1, -5, -20])).toEqual([-20, -5, 1, 2, 2, 42, 75, 76, 99]);
});
//# sourceMappingURL=selectionSort2.js.map