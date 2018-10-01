// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/DATABASE_CHAT";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// Routing
router.get('/', (request, response) => {
    response.status(200).send({message: 'Hello World!'})
});

//Set app to use express backend router
app.use(router);

// Configure port
const port = 8080;

// Listen to port
app.listen(port);

console.log(`Server is running on port: ${port}`);

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }