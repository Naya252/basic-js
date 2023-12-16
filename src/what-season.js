const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let val =`Unable to determine the time of year!`;
  if(date && typeof date !== 'undefined'){
    if(date instanceof Date && typeof date === 'object' && Object.keys(date).length === 0) {
      let newDate = new Date(date).setFullYear(2023);
      let month = new Date(newDate).getMonth() + 1;
  
      if(month === 12 || month <= 2) {
        val = 'winter';
      }
      if(month >= 3 &&  month <= 5) {
        val = 'spring';
      }
      if(month >= 6 &&  month <= 8) {
        val = 'summer';
      }
      if(month >= 9 &&  month <= 11) {
        val = 'autumn|fall';
      }  
    } else {
      throw new Error(`Invalid date!`)
    } 
  } 
  return val;
}

module.exports = {
  getSeason
};
