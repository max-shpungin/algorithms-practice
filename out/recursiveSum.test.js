import { test, expect } from "vitest";
import { recursiveSum } from "./recursiveSum";
test("recursiveSum - empty array", () => {
    expect(recursiveSum([])).toEqual(0);
});
test("recursiveSum - single element array", () => {
    expect(recursiveSum([5])).toEqual(5);
});
test("recursiveSum - array with positive numbers", () => {
    expect(recursiveSum([1, 2, 3, 4, 5])).toEqual(15);
});
test("recursiveSum - array with negative numbers", () => {
    expect(recursiveSum([-1, -2, -3, -4, -5])).toEqual(-15);
});
test("recursiveSum - array with mixed positive and negative numbers", () => {
    expect(recursiveSum([-1, 2, -3, 4, -5])).toEqual(-3);
});
//# sourceMappingURL=recursiveSum.test.js.map