var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('test', new Server('localhost', 27017), {safe:false});
db.open(function(err, db) {
  // Fetch a collection to insert document into
  var collection = db.collection("batch_document_insert_collection_safe");
  console.log("1");
  // Insert a single document
  collection.insert([{hello:'world_safe1'}
    , {hello:'world_safe2'}], {w:1}, function(err, result) {
  console.log("2");
    assert.equal(null, err);

    // Fetch the document
    collection.findOne({hello:'world_safe2'}, function(err, item) {
  console.log("3");
      assert.equal(null, err);
      assert.equal('world_safe2', item.hello);
  console.log(item.hello);
      db.close();
    })
  });
});
