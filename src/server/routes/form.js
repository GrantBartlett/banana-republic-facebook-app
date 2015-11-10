var db = require('monk')('localhost/banana-republic-app');

exports.save = function (req, res) {
    // Return if missing required data
    if (!req.body.name || !req.body.email)
        return res.sendStatus(400);


    var users = db.get('users');

    users.insert({name: req.body.name, email: req.body.email}, function (err, doc) {

        console.log(req.body);

        if (err) {
            res.sendStatus(400);
            throw err;
        } else {
            res.sendStatus(200);
        }

    });
};