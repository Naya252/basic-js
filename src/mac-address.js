const { NotImplementedError } = require('../extensions/index.js');

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
function isMAC48Address(n) {
  let val = false;

  if(typeof n === 'string' && n.includes('-')){
    let arr = n.split('-');
    if(arr.length === 6) {
      str = arr.join('').split('');
      if(str.every(el => ((el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) || (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 70)))) {
        val = true
      }
    }
  } 
  return val
}

module.exports = {
  isMAC48Address
};
