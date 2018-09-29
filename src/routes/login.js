module.exports = function(app, db){
    //Route to manage user logins 
    app.post('/api/login', (req, res) => {
        const assert = require('assert');
            var username = req.body.name.toString(); 
            var password = req.body.passowrd.toString(); 
            const collection = db.collection('credentials'); // make sure this matches whats in the database it might be CollectionUsers
            // do we have a user with that password password
            collection.find({'name':username, 'password':password}).count(function(err,count){
                assert.equal(null,err);

                if(count > 0){
                    res.send({'username':username, 'success':true });
                }else{
                    res.send({'username':'','success':false});
                }
            });
        });
    
}