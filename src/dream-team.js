import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {membersay} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let letters = [];
  let str = '';
  let x = 0;

  if (typeof members !== 'object' || members === null) {
    return false;
  };

  for (let i = 0; i < members.length; i++) {
    str = members[i];
    if ((typeof str === "string" || str instanceof String) === false) {
      x = x; //do nothing
    } else {
      let index = 0;
      while (str[index] == ' ') {
        index = index + 1;
      }
      letters.push(str[index].toUpperCase());
    }
  }
  //let letters = names.map(s => s.slice(0, 1));
  return letters.sort().join('');
}