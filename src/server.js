require('dotenv').config();
const Hapi = require('@hapi/hapi');
// notes
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require('./validator/notes');
// users
const UserService = require('./services/postgres/UserServices');
const UsersValidator = require('./validator/users');
const users = require('./api/users');

const init = async () => {
    const notesService = new NotesService();
    const userService = new UserService();

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.register({
        plugin: notes,
        options: {
            service: notesService,
            validator: NotesValidator,
        },
    });

    await server.register({
        plugin: users,
        options: {
            service: userService,
            validator: UsersValidator,
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
