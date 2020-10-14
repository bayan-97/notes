'use strict';

const notesadd = require('./notes.js');
const Note = require('../model/notes');

// const mongoose = require('mongoose');

class Model {
  constructor() {}
  get(_id, category) {
    if (_id && category === undefined) {
      return notesadd.findOne({ _id });
    } else if (category !== undefined) {
      return notesadd.find({ category });
    } else {
      return notesadd.find({});
    }
  }
  create(record) {
    const newRecord = new Note(record);
    return newRecord.save();
  }
  update(_id, record) {
    // {new:true} will return the new updated record without it it will return the old record
    return notesadd.findByIdAndUpdate(_id, { text: record }, { new: true });
  }
  delete(_id) {
    return notesadd.findByIdAndDelete(_id);
  }
}

module.exports = new Model();
