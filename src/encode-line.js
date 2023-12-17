const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let arr = str.split('');
  let set = new Set(arr);

  if(set.size === arr.length) {
    return str
  } else {
    let res = [];
    let sub = [];

    function cleanSub(el){
      if(sub.length){
        if(sub.length > 1){
          res.push(`${sub.length}${sub[0]}`)
        } else {
          res.push(sub[0])
        }
        sub = [];
        sub.push(el);
      }
    }

    arr.forEach((el, i) => {
      if(sub.includes(el) || sub.length === 0){
        sub.push(el)
      } else {
        cleanSub(el)
      }

      if(i === arr.length - 1){
        cleanSub('')
      }
    })

    return res.join('');
  }

}

module.exports = {
  encodeLine
};
