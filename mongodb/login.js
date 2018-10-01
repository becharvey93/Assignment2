module.exports = 
{
    // login by verifying log in details with the mongodb


loginuser:function(db, result){
    const collection = db.collection('CollectionUsers');
    MongoClient.connect(url, function(err,db){
    
    if(err) throw err; 
    var dbo = db.db("DATABASE_CHAT");
    dbo.collection("CollectionUsers").find({projection: { username:this.username }});

  })
}

}