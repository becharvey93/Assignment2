//var express = require('express');
//var io = require('socket.io')(http);
//var app = express();
//var http = require('http').Server(app); 


let express = require('express');
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);


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

