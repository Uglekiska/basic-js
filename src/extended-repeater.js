import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // let str = 'str';
  // let options = {
  // 	repeatTimes: 3,
  // 	separator: 'qq',
  // 	addition: '-',
  // 	additionRepeatTimes: 2,
  // 	additionSeparator: 'A'
  // }

  //function match(str, options) {
  let newStr = '';

  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    newStr = newStr + str;


    if ((options.addition || options.addition === false || options.addition === null)) {
      for (let index = 0; index < options.additionRepeatTimes; index++) {
        newStr = newStr + options.addition;
        if (options.additionRepeatTimes > 1 && index != options.additionRepeatTimes - 1) {
          newStr = newStr + options.additionSeparator;
        }
      }
    }

    if (options.repeatTimes > 1 && i != options.repeatTimes - 1) {
      newStr = newStr + options.separator;
    }
  }
  //console.log(newStr);
  return newStr;
};
//match(str, options);
//}