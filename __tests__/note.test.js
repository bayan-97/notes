'use strict';
const Input = require('../lib/input.js');
const Input2 = require('../lib/note.js');
jest.spyOn(global.console, 'log');

describe('apperance note to the user ', () => {
  it('returns the note is showed', () => {
    const options = new Input();
    let optiones1 = new Input2(options);
    optiones1.add();
    expect(console.log).toHaveBeenCalled();
  });
});

it('returns note isnot showed ', () => {
  const options = new Input();

  let optiones1 = new Input2(options);
  optiones1.notrText = '';

  optiones1.add();
  expect(console.log).not.toHaveBeenCalledWith();
});
