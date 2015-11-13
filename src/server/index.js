var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var error = require('./lib/errors');
var https = require('https');
var fs = require('fs');
var path = require('path');

// Routes
var form = require('./routes/form');

app.set('port', (process.env.PORT || 5000));

// Setup public folder routing
app.use(express.static(__dirname + '/../../dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Facebook POST route
app.post('/*', function (req, res) {
    res.sendFile(path.resolve('dist/public/index.html'));
    //res.sendFile(__dirname + '/index.html');
});

// Form endpoint
app.post('/form', form.save);

// Error handling
app.use(error.clientErrorHandler);

// Server
var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Banana Republic App listening at http://%s:%s', host, port);
});