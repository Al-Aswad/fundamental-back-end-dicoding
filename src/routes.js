const { handler } = require('@hapi/hapi/lib/cors');
const { deleteNoteByIdHandler } = require('./handler');
const { editNoteByIdHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes =(handler)=> [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
