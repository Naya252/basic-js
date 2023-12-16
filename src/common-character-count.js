const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = [];
  
  if(s1.length && s2.length){
    if(s1.includes(s2)){
      count = s2;
    }
    else if(s2.includes(s1)){
      count = s1;
    } else {
      let arr1 = s1.split('').sort();
      newS2 = s2;

      arr1.forEach(el => {
        if(newS2.includes(el)){
          newS2.replace(el, '');
          count.push(el);
          newS2 = newS2.replace(el, '');
        };
      })
    }
  } 

  return count.length;
}

module.exports = {
  getCommonCharacterCount
};
