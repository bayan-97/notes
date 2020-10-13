#!/usr/bin/env node
'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Input2 = require('./lib/note.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 30000,
  keepAlive: 1,
});
const inputData = new Input();
const options = new Input2(inputData);
// console.log();
if ('list' in inputData.informationTot) {
  options.list();

}
if ('add' in inputData.informationTot) {
  options.add();
  
} else if('delete' in inputData.informationTot) {
  options.delete();
  
}
