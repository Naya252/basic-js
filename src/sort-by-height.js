const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let negative = [];
  let myArr = [...arr];

  myArr.forEach((el, i)=> {
    if(el === -1){
      negative.push(i);
      myArr[i] = ''
    }
  })

  myArr = myArr.filter(el => typeof el !== 'string');
  myArr.sort((a, b) => a - b);

  if(negative.length){
    negative.forEach(el => {
      myArr.splice(el, 0, -1)
    })
  }

  return myArr;
}

module.exports = {
  sortByHeight
};
