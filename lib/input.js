'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.informationTot = args;
    this.action = this.act(Object.keys(args)[1]);
    this.payload = this.actionValid(args.add);
  }
  actionValid(way) {
    if (this.action && way) {
      return way;
    } else if (this.action == false) {
      let massage = '';
      return massage;
    } else if (way == '') {
      console.log('please inter note ');
      return false;
    }
    //i is for case-insensitive
  }
  act(act) {
    const validMethods = /list|delete|add|/i;
    if (validMethods.test(act)) {
      return act;
    } else {
      console.log('unvalied method ');
    }
  }
}

module.exports = Input;
