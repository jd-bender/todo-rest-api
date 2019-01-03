const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/NewTodoApp', (err, db) => {
   if (err) {
       return console.log("Unable to connect to MongoDB: " + err);
   }

   console.log('Connected to MongoDB database');

   db.collection('Users').find({name: "Jake"}).toArray().then((doc) => {
      console.log(JSON.stringify(doc));
   }).catch((e) => {
       console.log('Something went wrong: ' + e);
   });

   db.close();
});