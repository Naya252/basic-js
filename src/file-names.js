const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = []
  let arr = [...names];
  let count = 0;

  let i = 0;
  while(i < arr.length){
    checkDouble(arr[i], arr[i]);
    i++
  }

  function checkDouble(val, base){
    if(res.length === 0 || !res.includes(val)) {
      res.push(val);
      count = 0;
    } else {
      count++
      let newVal = `${base}(${count})`;
      checkDouble(newVal, base)
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
