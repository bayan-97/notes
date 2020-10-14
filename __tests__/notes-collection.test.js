'use strict';
const notes = require('../model/notes-collection.js');
describe('notes Model', () => {
  it('can create() a new notes item', () => {
    jest.setTimeout(5000);
    const obj = { text: 'test notes', category: 'school' };
    return notes.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can get() a notes item', async () => {
    jest.setTimeout(5000);
    const obj = { text: 'test notes', category: 'scool' };
    const expected = { text: 'test notes', category: 'scool' };
    const record = await notes.create(obj);
    const notesItem = await notes.get(record.id, undefined);
    // console.log(notesItem);
    Object.keys(expected).forEach((key) => {
      expect(notesItem[key]).toEqual(expected[key]);
    });
  });
  it('can delete() a notes item', async () => {
    jest.setTimeout(5000);
    const obj = { text: 'test notes3', category: 'school' };
    // const expected = { text: 'test notes', category:'scool' };
    const record = await notes.create(obj);
    await notes.delete(record.id);
    //    const notesItem = await notes.get(record._id);
    const notesItem1 = await notes.get();
    notesItem1.forEach((key) => {
      expect(key.id).not.toEqual(record.id);
    });
  });
  it('can update() a notes item', async () => {
    jest.setTimeout(5000);
    const obj = { text: 'test notes3', category: 'school' };
    // const expected = { text: 'test notes', category:'scool' };
    const record = await notes.create(obj);

    const notesItem = await notes.update(record.id, 'test notes32');
    expect(notesItem.text).toEqual('test notes32');
  });
});
