// npm install sleep-async

var http  = require('http');
var sleep = require('sleep-async');

http.createServer(function (req, res) {
  sleep().sleep(2000, function() {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello from Node! The time is now ' + new Date());
  });
}).listen(3000);
