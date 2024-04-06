/**
 * Perform selection sort on an array of numbers.
 * Runs in O(n^2)
 *
 * Accepts an array of numbers in any order, returns a NEW sorted array
 */
// find the smallest number in the input
// push that number to the output
function selectionSort(arr) {
    const arrCP = arr.slice();
    const sorted = [];
    for (let i = 0; i < arr.length; i++) {
        let idxOfSmallest = _getIdxOfSmallest(arrCP);
        sorted.push(arrCP[idxOfSmallest]);
        arrCP.splice(idxOfSmallest, 1);
    }
    // get the index of the smallest value
    function _getIdxOfSmallest(arr) {
        let idxSmallest = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[idxSmallest]) {
                idxSmallest = i;
            }
        }
        return idxSmallest;
    }
    return sorted;
}
// console.log(selectionSort([3, 64, 4, 1, 6, 0]));
// console.log(selectionSort([99, 2, 75, 2, 42, 76, 1, -5, -20]));
export default selectionSort;
//# sourceMappingURL=selectionsort.js.map