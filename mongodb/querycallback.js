/* module.exports = 
    {
        //Object with one method - update data
        //Takes in a reference to the database and returns the result as a callback
        updatedata:function(db,result){
            const collection = db.collection('products');
            collection.findOne({id:'1'}, function(err,res){
                if(err)throw err; 
                    collection.find().toArray(function(err,res){
                        if (err) throw err; 
                            console.log (res);
                            result(res); 
                    })
            })
        }
    } */