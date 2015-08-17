exports.start = function() {
    var express = require("express");
    var app = express();

    app.get('/serverInfo', function(req, res) {
        res.send('ok');
    })

    app.get('/*.*', function(req, res) {
        var options = {
            root: './web/',
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        var fileName = req.path;
        res.sendFile(fileName, options, function (err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
            else {
                console.log('Sent:', fileName);
            }
        });
    });
    var server = app.listen('3000');
    return server;
}
