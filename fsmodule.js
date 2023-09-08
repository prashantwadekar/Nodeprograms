var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
var q = url.parse(req.url, true).query;
var txt = "<h2>Year : <font color='blue'>"+ q.year + "</font></h2><h2>Month : <font color='green'>" + q.month + "</font></h2>";
res.end(txt);
}).listen(8080);
console.log('Node.js web server at port 8080 is running..');
