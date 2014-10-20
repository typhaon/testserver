var http = require('http');


var server = http.createServer(function (request, response) {
	response.writeHead(200, {"content-Type": "text/plain"});
	response.end("Hello Wonderful World!\n");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");


