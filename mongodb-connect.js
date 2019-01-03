const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/NewTodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to db');
    }

    console.log('connected to mongodb');

    db.collection('Users').insertOne({
       name: "Jake",
       age: 24,
       location: "Sacramento"
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user: ' + err);
        }

        console.log(result.ops);
    });

    db.close();
});