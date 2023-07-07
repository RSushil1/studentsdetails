const {MongoClient} = require('mongodb');

let dbConnection
let uri = "mongodb+srv://Sushilsinghrathore1998:sx4ONqG0M9OaaM8j@cluster1.mqwoklf.mongodb.net/School?retryWrites=true&w=majority"
//mongodb+srv://sushilsinghrathore1998:<password>@cluster0.eabfobo.mongodb.net/?retryWrites=true&w=majority
module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect(uri).then((client)=>{
            dbConnection = client.db();
            return cb();
        }).catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=> dbConnection
}