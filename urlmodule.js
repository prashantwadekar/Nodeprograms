var http=require('http');
http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});
res.write("<h2><font color='blue'>"+req.url+"</font></h2>");
res.end();
}).listen(8080);
console.log('Node.js web server at port 8080 is running..');
