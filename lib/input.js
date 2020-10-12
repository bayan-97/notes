'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    console.log('this is the row argv ', process.argv);
    const args = minimist(process.argv.slice(2));
    console.log('this is the row argv after slice', process.argv.slice(2));
    console.log('this is the row argv after minimist', args);
    this.action = this.act(Object.keys(args)[1]);
    this.payload = this.actionValidat(args.add);
  }
  actionValidat(way) {
    if (this.action && way) {
      return way;
    } else if (this.action == false) {
      let massage = '';
      return massage;
    } else {
      console.log('please inter note ');
      return false;
    }
    //i is for case-insensitive
  }
  act(act) {
    if (act !== 'add') {
      console.log('unvalied method ');
      return false;
    } else {
      return act;
    }
  }
}



module.exports = Input;
