'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const note = require('../model/notes-collection.js');
// const Note = require('../model/notes');
const Input = require('./input.js');
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

class Input2 {
  constructor() {
    let newNotes = new Input();

    this.noteModified = newNotes.informationTot;
    this.notrText = newNotes.payload;
    this.newAction = newNotes.action;
  }
  execute(acting) {
    if (acting === 'add') {
      return acting;
    } else {
      return false;
    }
  }
  async add() {
    let returmethod = this.execute(this.newAction);
    if (
      returmethod !== false &&
      this.notrText !== false &&
      this.notrText !== ''
    ) {
      console.log(`Adding Note:  ${this.notrText}`);

      // if (this.notrText === true) {
      //   console.log('please inter note ');
      // }
    }

    const userNote = {
      text: this.noteModified.add,
      category: this.noteModified.category,
    };

    // const note = new Note(userNote);
    let addead = await note.create(userNote);

    console.log(`note saved ${addead.text}`);
    // let returmethod = this.execute(this.newAction);

    mongoose.disconnect();
  }
  async delete() {
    await note.delete(this.noteModified.delete);
    console.log(`Deleted Note ${this.noteModified.delete}`);
    mongoose.disconnect();
  }
  async list() {
    // console.log(this.noteModified);
    if (this.noteModified.list === true) {
      const allNote = await note.get();
      console.log('All list ', allNote);
    } else {
      const note1 = await note.get(this.noteModified.list);
      // const note2 = await note.get(this.noteModified.id,undefined);

      console.log(note1);
    }
    mongoose.disconnect();
  }
  // update(){}
}

module.exports = Input2;
