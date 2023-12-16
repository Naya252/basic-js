const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let val;
  if(Array.isArray(arr)){
    val = [];
    let myArr = arr;
    if(myArr.length) {
      let newMyArr = myArr.filter(el => el !== null && typeof el !== 'undefined' && el !== false  && !Array.isArray(el));
      if(!newMyArr.includes('--discard-prev') && !newMyArr.includes('--double-prev') && !newMyArr.includes('--double-next') && !newMyArr.includes('--discard-next')) {
        val = newMyArr
      } else {
      
        newMyArr.forEach((elem, i) => {
          if(typeof elem === 'string'){
            if(elem === '--discard-prev') {
              if(i !== 0){
                newMyArr[i-1] = 'isDelete';
              }
              elem = 'isDelete';
            }
            if(elem === '--double-prev'){
              if(i > 0){
                newMyArr[i] = newMyArr[i-1];
              }
            }
            if(elem === '--double-next'){
              if(i !== myArr.length - 1) {
              newMyArr[i] = newMyArr[i+1];
            }
              
            }
            if(elem === '--discard-next'){
              if(i !== myArr.length - 1) {
                newMyArr[i+1] = 'isDelete';
              }
              elem = 'isDelete';
            }
          }
        });

        val = newMyArr.filter(element => typeof element !== 'string');
      }
    } 

    return val;
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  
}

module.exports = {
  transform
};
