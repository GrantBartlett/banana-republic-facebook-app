var express = require('express');
var path = require('path');
var app = express();
var mongo = require('./lib/mongo');

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Banana Republic App listening at http://%s:%s', host, port);
});

app.use(express.static(__dirname + '/../../dist/public'));