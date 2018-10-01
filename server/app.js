const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/DATABASE_CHAT';
const User = require('./model/user'); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    });
})
 
app.listen(3000, () => console.log('chat server running on port 3000!'))