var express = require('express');
var path = require('path');
var app = express();
var bodyParser= require('body-parser');
var error = require('./lib/errors');

// Routes
var form = require('./routes/form');

// Server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Banana Republic App listening at http://%s:%s', host, port);
});

app.use(express.static(__dirname + '/../../dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Form
app.post('/form', form.save);

// Error handling
app.use(error.clientErrorHandler);