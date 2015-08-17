var Client = require('ssh2').Client;

console.log('Start ssh2...');
var conn = new Client();
conn.on('ready', function () {
    console.log('Client :: ready');
    conn.exec('ps -ef', function (err, stream) {
        if (err) throw err;
        stream.on('close', function (code, signal) {
            console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
            conn.end();
        }).on('data', function (data) {
            console.log('STDOUT: ' + data);
        }).stderr.on('data', function (data) {
            console.log('STDERR: ' + data);
        });
    });
}).on('keyboard-interactive', function () {
    console.log('keyboard');
}).connect({
    host: '120.24.208.71',
    port: 22,
    tryKeyboard: true,
//    debug: console.log,
    readyTimeout: 99999,
    username: 'root',
    password: 'Kenraul01'
});
