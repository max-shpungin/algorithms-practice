import { describe, test, it, expect } from "vitest";

import factorial from "./factorial";

test("factorial", function () {
  expect(factorial(3)).toEqual(6);
  expect(factorial(5)).toEqual(120);
})