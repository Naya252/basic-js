const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function checkLength(num) {
    let strVal = num.toString();
    if(strVal.length > 1){
      let arr = strVal.split('');
      let number = arr.reduce((acc, cur) => +acc + +cur);
      return checkLength(number)
    } else {
      return num;
    }
  }
    
  let res = checkLength(n)
  return res;
}

module.exports = {
  getSumOfDigits
};
