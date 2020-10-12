'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    action: 'add',
    payload: 'test note',
  };
});

describe('right method', () => {
  it('returns the method if it add', () => {
    const options = new Input();
    expect(options.act('add')).toEqual('add');
  });
  it('returns false  if method isnot add ', () => {
    const options = new Input();
    expect(options.act('delete')).toBeFalsy();
  });
});
describe('enter note', () => {
  it('returns the note ', () => {
    const options = new Input();
    options.action = true;
    expect(options.actionValid('anoted')).toEqual('anoted');
  });
  it('returns false  if note doesnot enter', () => {
    const options = new Input();
    //options.action=true;
    expect(options.actionValid()).toBeFalsy();
  });

  it('returns false  if note enter but method isnot right ', () => {
    const options = new Input();
    options.action = false;
    expect(options.actionValid()).toBeFalsy();
  });
});
describe('rigt output object', () => {
  it('returns the object ', () => {
    const options = new Input();

    options.action = 'add';
    options.payload = 'test note';

    const expected = {
      action: 'add',
      payload: 'test note',
    };
    expect(options).toMatchObject(expected);
  });
  it('returns error  if not return object', () => {
    const options = new Input();

    options.action = 'add2';
    options.payload = '';

    const expected = {
      action: 'add',
      payload: 'test note',
    };
    expect(options).not.toEqual(expected);
  });
});
