const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/NewTodoApp', (err, db) => {
   if (err) {
       return console.log("Unable to connect to MongoDB database");
   }

   console.log("Connected to MongoDB database");

   db.collection('Users').findOneAndUpdate({
       name: "Jake Bender"
   }, {
       $set: {
           name: "REFEDFSDFS",
       },

       $inc: {
           age: 1
       }
   }, {
       returnOriginal: false
   }).then((doc) => {
       console.log("Successfully updated document: " + JSON.stringify(doc));
   }).catch((e) => {
       console.log("Something went wrong: " + e);
   });

   db.close();
});