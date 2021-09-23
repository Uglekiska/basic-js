import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(inputString) {
	let num = 0;
	let arr = Array.from(inputString);
	if (arr.length === 17) {
		for (let i = 0; i < arr.length; i = i + 3) {
			if (typeof(parseInt(`${arr[i] + arr[i + 1]}`, 16)) === 'number' && isNaN(parseInt(`${arr[i] + arr[i + 1]}`, 16)) === false) {
				num = num + 1;
			} else {
				return false;
			}
		}
	} else {
		return false;
	}
	if (num === 6) {
		return true;
	} else {
		return false;
	}
}
