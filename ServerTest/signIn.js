var mongoClient = require("mongodb").MongoClient;
var mongoServer = require("mongodb").Server;

var mClient = new mongoClient(new mongoServer('localhost', 27017, {'native_parser' : true}));
var db = mClient.db('test',{safe:false});

function signIn(ID, callback){
    db.open(function(err, db){
        if(err) throw err;
        db.collection('users').findOne({id:ID}, function(err, doc){
            if(err) throw err;
            if(doc){
                callback(err, "ID Exists. Try Other ID");
                db.close();
            }
            else{
                db.collection('users').insert({id:ID}, function(err, doc){
                    if(err) throw err;
                    callback(err, "OK");
                    db.close();
                });
            }
        });

    });
}

exports.signIn = signIn;
