import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let nn = Array.from(`${n}`);
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < nn.length; i++) {
    sum = sum + nn[i] / 1;
  }
  let sum1 = Array.from(`${sum}`);
  for (let i = 0; i < sum1.length; i++) {
    sum2 = sum2 + sum1[i] / 1;
  }
  return sum2;
}