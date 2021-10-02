import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i] !== str[i + 2] && str[i] !== str[i - 1]) {
      arr.push(`2${str[i]}`);
    } else if (str[i] === str[i + 1] && str[i] === str[i + 2] && str[i] !== str[i + 3] && str[i] !== str[i - 1]) {
      arr.push(`3${str[i]}`);
    } else if (str[i] === str[i + 1] && str[i] === str[i + 2] && str[i] === str[i + 3]) {
      arr.push(`4${str[i]}`);
    } else if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
      arr.push(`${str[i]}`);
    }
  }
  return arr.join('');
}