// set up mongoDB connection
const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,function(err, client){
    //this is the callback function for when a connection is made. It recieves two values
    if (err) {return console.log(err)}

    const dbName = 'DATABASE_CHAT';
    const db = client.db(dbName);

    var querycb = require('./serial/querycallback'); 
    // Call Backs
    querycb.updatedata(db, function(res){
        console.log(result);
    }); 
}); 


const express = require('express');
const app = express(); 
const path = require('path');
const http = require('http').Server(app); 
const io = require('socket.io')(http); 
const bodyParser = require('body-parser'); 
app.use (bodyParser) = require('body-parser'); 
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/channels')));
require('./routes.js')(app, path);
require('./socket.js')(app, io);
require('./listen.js')(http);