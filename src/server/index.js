var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var error = require('./lib/errors');
var https = require('https');
var fs = require('fs');

// Routes
var form = require('./routes/form');

var port = process.env.PORT || 5000;

// Server
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Banana Republic App listening at http://%s:%s', host, port);
});

// Setup public folder routing
app.use(express.static(__dirname + '/../../dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Form endpoint
app.post('/form', form.save);

// Error handling
app.use(error.clientErrorHandler);