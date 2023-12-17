const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',

  getLength() {
    let value = 0;
    if(this.chain.length){
      let arr = this.chain.split('~~');
      value = arr.length;
    }
    return value
  },
  addLink(value) {
    if(this.chain.length){
      this.chain += `~~( ${value === undefined ? '' : value} )`
    } else {
      this.chain += `( ${value === undefined ? '' : value} )`
    }
    return chainMaker;
  },
  removeLink(position) {
    if(!this.chain.length || position === undefined || typeof position !== 'number'){
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!')
    } else {
      let arr = this.chain.split('~~');

      if(position <= arr.length && position > 0) {
        arr.splice(position - 1, 1);
        this.chain = arr.join('~~');
        return chainMaker;
      } else {
        this.chain = '';
        throw new Error('You can\'t remove incorrect link!')
      }
    }
  },
  reverseChain() {
    if(this.chain.length){
      let arr = this.chain.split('~~');
      arr.reverse();
      this.chain = arr.join('~~');
    }
    return chainMaker;
  },
  finishChain() {
    let val = this.chain;
    this.chain = ''
    return val;
  }
};

module.exports = {
  chainMaker
};
