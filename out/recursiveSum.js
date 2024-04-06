/**
 * Given an array of numbers, return sum calculately recursively.
 */
function recursiveSum(nums) {
    if (nums.length === 0)
        return 0;
    const [first, ...rest] = nums;
    return first + recursiveSum(rest);
}
console.log(recursiveSum([5, 6, 7, 4, 2, 1]));
let sample = [5, 6, 7, 4, 2, 1];
let [first, second, ...others] = sample;
console.log(first, second, others);
export { recursiveSum };
//# sourceMappingURL=recursiveSum.js.map