const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;

  if(n % 10 === 0) {
    res = n / 10;
  } else {
    let string = n.toString();
    let arr = string.split('');
    if(arr.some(el => el === 0)){
      arr = arr.replace(0, '');
      res = Number(arr.join(''))
    } else {
      let arr = string.split('');
      if(arr[0] < arr[1]){
        arr[0] = '';
      } else if (arr[0] > arr[1]){
        arr[1] = '';
      } else if(arr[arr.length - 1] > arr[arr.length - 2]) {
        arr[arr.length - 2] = ''
      } 

      res = Number(arr.join(''))

    }
  }

  return res
}

module.exports = {
  deleteDigit
};
