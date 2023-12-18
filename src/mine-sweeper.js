const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let res = [];

  matrix.forEach((row, i)=>{
    let subArr = []
    
    row.forEach((el, idx)=>{
      let count = 0

      // top
      if(i > 0){
        if(idx > 0){
          if(matrix[i - 1][idx - 1]){
            count++
          }
        }
        
        if(matrix[i - 1][idx]){
          count++
        }

        if(idx < row.length -1) {
          if(matrix[i - 1][idx + 1]){
            count++
          }
        }
      }
      
      // line
      if(idx > 0){
        if(matrix[i][idx - 1]){
          count++
        }
      }
      if(idx < row.length - 1) {
        if(matrix[i][idx + 1]){
          count++
        }
      }


      // bottom
      if(i < matrix.length - 1){
        if(idx > 0){
          if(matrix[i + 1][idx - 1]){
            count++
          }
        }
        if(matrix[i + 1][idx]){
          count++
        }
        if(idx < row.length - 1) {
          if(matrix[i + 1][idx + 1]){
            count++
          }
        }
      }

      subArr.push(count);
    })

    res.push(subArr);
  })

  return res;

}

module.exports = {
  minesweeper
};
