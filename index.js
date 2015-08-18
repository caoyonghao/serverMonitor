var webserver = require('./app/webserver.js');
var io = require('./app/io.js');
io.init(webserver.start());