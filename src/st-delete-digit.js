import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let x = Array.from(n.toString());
	let min = Math.min.apply(null, x);
	let ind = x.indexOf(min.toString());
	let numbers = x.splice(ind, 1);
	let number = x.join('') / 1;
	return number;
}
