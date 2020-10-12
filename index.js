#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const Input2 = require('./lib/note.js');
const inputData = new Input();
const options = new Input2(inputData);
options.add();
