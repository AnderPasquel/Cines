var fs = require('fs');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://AnderP:12341234@ds117336.mlab.com:17336/cines_scraper';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    //_id: false, titulo: true, cine: true, complejo: true, precio: true, fecha: true, funcion: true
    /*db.collection("documents").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*/
    var obj = JSON.parse(fs.readFileSync('jsonpeliculas.json', 'utf8'));
        insertDocuments(db, obj, function () {
        db.close();
    });

});


var insertDocuments = function (db, obj, callback) {
    // Get the documents collection
    var collection = db.collection('funciones');
    // Insert some documents
    collection.insertMany(obj, function (err, result) {
        console.log(collection);
        callback(result);
    });
}

