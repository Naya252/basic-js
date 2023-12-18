const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  let res = [];

  matrix[0].forEach((el, i) => {
    let subArr = [];
    matrix.forEach((element, idx) => {
        subArr.push(element[i])
    })
    arr.push(subArr)

  })
  
  arr.forEach((el) => {
    let i = 0;
    let max = el.length;
    while(i<max){

      if(el[i] !== 0){
        res.push(el[i]);
      } else {
        break
      }
      i++;
    }
    
  })

  res = res.length ? res.reduce((acc, cur) => acc + cur) : 0;
  return res;
}

module.exports = {
  getMatrixElementsSum
};
