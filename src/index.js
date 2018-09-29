
var express = require('express');
var app = express();
var http = require('http').Server(app);
let server = http.Server(app);
let socketIO = require('socket.io');
var io = require('socket.io')(http);


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('started on port: 3000');
}); 



app.use(express.static(__dirname + '/www'));

var server = http.listen(3000, function (){
    var host = server.address().address;
    var port = server.address().port; 
    console.log("Node.js Server is Working"); 
    console.log("Server is listening on: " + host + "port: " + port);
});

