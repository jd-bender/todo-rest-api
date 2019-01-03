const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/NewTodoApp', (err, db) => {
   if (err) {
       return console.log("Unable to connect to MongoDB database");
   }

   console.log('Connected to MongoDB database');

   db.collection('Users').findOneAndDelete({name: "Jake"}).then((doc) => {
       console.log('document successfully removed: ' + JSON.stringify(doc));
   }).catch((e) => {
       console.log('Something went wrong: ' + e);
   });

   db.close();
});