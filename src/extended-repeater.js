const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = ''

  if(options.addition  || options.additionRepeatTimes || options.additionSeparator){
    addition = buildString(`${options.addition}`, options.additionRepeatTimes, options?.additionSeparator || '|');
  }
  
  let val = buildString(`${str}${addition}`, options.repeatTimes, options.separator);

  console.log(val)

  function buildString(val = '', max = 0, separator = '+'){
    let idx = 1;
    console.log(val)
    console.log(max)
    console.log(separator)
    let res = [val]
    while(idx < max){
      idx++;
      res.push(val);
      console.log(res)
    }
    res = res.join(`${separator}`);
    return res;
  }

  return val;
}

module.exports = {
  repeater
};
