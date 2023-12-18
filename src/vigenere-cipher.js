const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  toArr(val){
    let data = val.toUpperCase().split('');
    return data
  }

  toIndex(myKey, myValue) {
    let fullKey = [];
    let fullValue = [];

    let notLetters = []

    myValue.forEach((v, index) => {
      if(this.alphabet.includes(v)){
        let i = this.alphabet.indexOf(v);
        fullValue.push(i);

        if(fullKey.length < myValue.length){
          myKey.forEach(k => {
            if(this.alphabet.includes(k)){
              let idx = this.alphabet.indexOf(k);
              fullKey.push(idx)
            }
          })
        }
      } else {
        notLetters.push({idx: index, value: v})
      }
    });

    fullKey.splice(myValue.length)
    return {fullKey, fullValue, notLetters}
  }

  calcMod26(data) {
    let numRes = [];

    data.fullValue.forEach((v, i) => {
      if(typeof v === 'number'){
        let sum = v + data.fullKey[i];
        if(sum < 26) {
          numRes.push(sum)
        } else if(sum === 26) {
          numRes.push(0)
        } else {
          numRes.push(sum % 26)
        }
      } else {
        numRes.push(v)
      }
    })

    return numRes
  }

  decCalcMod26(data) {
    let numRes = [];

    data.fullValue.forEach((v, i) => {
      if(typeof v === 'number'){
        let res = v - data.fullKey[i];
        if(res < 26 && res > 0) {
          numRes.push(res)
        } else if(res < 0){
          numRes.push(26 + res)
        }
        else if(res === 26) {
          numRes.push(0)
        } else {
          numRes.push(res % 26)
        }
      } else {
        numRes.push(v)
      }
    })

    return numRes
  }

  addNotLetters(arr, notLetters){
    notLetters.forEach(el => {
      arr.splice(el.idx, 0, el.value)
    })
    
    return arr
  }

  toStr(numRes) {
    let res = [];
    numRes.forEach(idx => {
      if(typeof idx === 'number'){
        res.push(this.alphabet.charAt(idx))
      } else {
        res.push(idx)
      }      
    })

    return res.join('');
  }

  encrypt(val, key) {
    if(val === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    // get array with letters
    let myKey = this.toArr(key);
    let myValue = this.toArr(val);

    // get array with indexes of alphabet
    let data = this.toIndex(myKey, myValue);

    // calculate new indexes
    let numRes = this.calcMod26(data);

    // get array with all chars
    let allArr = this.addNotLetters(numRes, data.notLetters);

    // return new string
    let res = this.toStr(allArr);

    return res;
  }

  decrypt(val, key) {
    if(val === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    // get array with letters
    let myKey = this.toArr(key);
    let myValue = this.toArr(val);

    // get array with indexes of alphabet
    let data = this.toIndex(myKey, myValue);

    // calculate new indexes
    let numRes = this.decCalcMod26(data);

    // get array with all chars
    let allArr = this.addNotLetters(numRes, data.notLetters);

    // return new string
    let res = this.toStr(allArr);

    return res;
  }
}
module.exports = {
  VigenereCipheringMachine
};
