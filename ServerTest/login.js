var mongoClient = require("mongodb").MongoClient;
var mongoServer = require("mongodb").Server;

var mClient = new mongoClient(new mongoServer('localhost',27017,{'native_parser':true}));
var db = mClient.db('test');

function login(ID, callback){
    db.open(function(err, db){
        if(err) throw err;
        db.collection('users').findOne({id:ID}, function(err, doc){
            if(err) throw err;
            if(doc){
                callback(err, "OK");
                db.close();
            }
            else{
                callback(err, "There is no such ID. please make new ID");
                db.close();
            }
        });
    })
}

exports.login = login;
