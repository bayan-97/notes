'use strict';

const Input = require('./input.js');
// const new1=new input()
class Input2 {
  constructor() {
    let newNotes = new Input();
    // console.log('hi', newNotes);
    let numId;
    if (numId) {
      numId = numId++;
    } else {
      numId = 0;
      numId = numId++;
    }

    (this.id = numId), (this.notrText = newNotes.payload);
    this.newAction = newNotes.action;
  }
  execute(acting) {
    // eslint-disable-next-line no-constant-condition
    if ((acting = 'add')) {
      return acting;
    } else {
      return false;
    }
    //i is for case-insensitive
  }
  add() {
    let returmethod = this.execute(this.newAction);

    if (returmethod !== false && this.notrText !== false && this.notrText !== '') {
      console.log(`Adding Note:  ${this.notrText}`);
    }
  }
}


module.exports = Input2;
