'use strict';
const mongoose = require('mongoose');

const noteSchma = new mongoose.Schema({
  text: { type: 'string', required: true },
  category: { type: 'string', required: true },
});


module.exports = mongoose.model('note', noteSchma);
