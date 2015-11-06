// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect('mongodb://localhost:27017/banana-republic-app', function (err, db) {
    if (!err) {
        console.log('Succesfully connected to the', db.databaseName, 'database.');
    } else {
        console.log('There has been an error connecting to the database');
    }
});