import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disks, turnsSpeed) {
  let turns = 2 ** disks -1;
	let ts2 = turns / turnsSpeed;
	let seconds = Math.floor(ts2 * 3600);
	let han = {
		turns: turns, 
		seconds: seconds
	};
	return han;
}
