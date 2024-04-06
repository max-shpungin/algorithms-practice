/**
 * Req:
 * Takes a number and returns the factorial of that number.
 * Implemented recursively.
 *
 * Ex.:
 * 3! = 3 * 2 * 1 = 6
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 *
 * Pseudo:
 * if the value is 1
 *  return 1
 * else return value * recurse(value - 1);
 */

function factorial(val: number): number {
  if (val <= 1)
    return 1;

  return val * factorial(val-1);
}

export default factorial;