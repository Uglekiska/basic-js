import {
  NotImplementedError
} from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (MODERN_ACTIVITY < sampleActivity / 1 || sampleActivity / 1 === 0) {
    return false;
  }
  if (isNaN(sampleActivity / 1) === true || sampleActivity / 1 < 0) {
    return false;
  }

  let age = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  let age2 = Math.ceil(age);
  //console.log(age2);
  return age2;
}