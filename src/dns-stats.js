const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};

  let arr = domains.map(el => {
    el = el.split('.').reverse();
    el = el.map(elem => `.${elem}`);
    return el
  })
  arr.sort();

  checkDomains(arr);

  function checkDomains(data){

    if(data.length) {
      let domain = data[0][0];
      res[domain] = 0;

      data.forEach(el => {
        if(el[0] === domain) {
          res[domain]++;
          if(el[1]){
            el[1] = `${el[0]}${el[1]}`;
          }
          el.shift();
        }
      })
      data = data.filter(el => el.length);

      checkDomains(data);
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
