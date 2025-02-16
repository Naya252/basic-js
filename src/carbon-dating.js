const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let val = false;
  if (typeof sampleActivity === 'string' && !isNaN(parseInt(sampleActivity)) &&  +sampleActivity < MODERN_ACTIVITY && +sampleActivity > 0) {
    let k = parseFloat('0.693')/HALF_LIFE_PERIOD;
    let sample = sampleActivity.includes('.') ? parseFloat(sampleActivity) : parseInt(sampleActivity)
    let res = (Math.log(MODERN_ACTIVITY/sample))/k;
    val = Math.ceil(res)
  }
  return val
}

module.exports = {
  dateSample
};
