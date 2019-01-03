const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/NewTodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var testTodo = new Todo({
    text: "buy milk",
    completed: false,
    completedAt: 0
});

testTodo.save().then((doc) => {
    console.log("new todo saved successfully: " + JSON.stringify(doc));
}).catch((e) => {
    console.log('Something went wrong: ' + e);
});