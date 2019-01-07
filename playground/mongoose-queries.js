const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.findById("5c32d7ffbb48ab1334381fdc").then((todo) => {
    if (!todo) {
        return console.log('Todo was not found');
    }

    console.log(JSON.stringify(todo));
}).catch((e) => {
    console.log('Something went wrong: ' + e);
});
