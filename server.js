var http = require('http');

var port = Number(process.env.PORT || 5000);

http.createServer(function(req, res) {
    res.end("Hello, Heroku!");
}).listen(port);
