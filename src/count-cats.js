import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let cats = [];
	let x = matrix.flat();
	for (let i = 0; i < x.length; i++) {
		if (x[i] === '^^') {
			let z = cats.push(x[i]);
		}
	}
	let number = cats.length;
	return number;
}
