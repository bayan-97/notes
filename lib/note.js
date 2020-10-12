'use strict';

const Input = require('./input.js');

class Input2 {
  constructor() {
    let newNotes = new Input();
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
    if (acting === 'add') {
      return acting;
    } else {
      return false;
    }
  }
  add() {
    let returmethod = this.execute(this.newAction);

    if (
      returmethod !== false &&
      this.notrText !== false &&
      this.notrText !== ''
    ) {
      // eslint-disable-next-line no-empty
      if (this.notrText === true) {
        console.log('please inter note ');
      } else {
        console.log(`Adding Note:  ${this.notrText}`);
      }
    }
  }
}

module.exports = Input2;
