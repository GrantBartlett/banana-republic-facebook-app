var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var error = require('./lib/errors');
var https = require('https');
var fs = require('fs');

// Routes
var form = require('./routes/form');

// Server
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Banana Republic App listening at http://%s:%s', host, port);
});

// HTTPS Server
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
}, app).listen(8443, function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Banana Republic App listening at https://%s:%s', host, port);
});

// Setup public folder routing
app.use(express.static(__dirname + '/../../dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Form endpoint
app.post('/form', form.save);

// Error handling
app.use(error.clientErrorHandler);