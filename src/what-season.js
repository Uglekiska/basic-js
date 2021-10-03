import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let mon = date.getMonth();
    if (mon === 2 || mon === 3 || mon === 4) {
      return 'spring';
    }
    if (mon === 5 || mon === 6 || mon === 7) {
      return 'summer';
    }
    if (mon === 8 || mon === 9 || mon === 10) {
      return 'autumn';
    }
    if (mon === 11 || mon === 1 || mon === 0) {
      return 'winter';
    }
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }
}