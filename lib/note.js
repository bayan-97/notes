'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const Note = require('../model/notes');
const Input = require('./input.js');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
      // eslint-disable-next-line no-empty
      if (this.notrText === true) {
        console.log('please inter note ');
      } else {
        console.log(`Adding Note:  ${this.notrText}`);
      }}
    

    const userNote = {
      text: this.noteModified.add,
      category: this.noteModified.category,
    };

    const note = new Note(userNote);
    let addead = await note.save();
    console.log(`note saved ${addead.text}`);

    mongoose.disconnect();
  }
  async delete() {
    await Note.findByIdAndDelete(this.noteModified.delete);
    console.log(`Deleted Note ${this.noteModified.delete}`);
    mongoose.disconnect();
  }
  async list() {
    console.log(this.noteModified);
    if (this.noteModified.list === true) {
      const allNote = await Note.find({});
      console.log('All list ', allNote);
    } else {
      const note1 = await Note.find({ category: this.noteModified.list });
      console.log(note1);
    }
    mongoose.disconnect();
  }
}

module.exports = Input2;
