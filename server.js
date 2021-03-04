const http = require('http');

const colors = require('colors');

/*
http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-type': 'text/html'});//código de estado http
    res.write('<h1>Hello world from Node! goodbye!</h1>');
    
    res.writeHead(200, {'Content-type': 'text/plain'});//código de estado http
    res.write('Hello world from plain text');

    res.writeHead(404, {'Content-type': 'text/html'});//código de estado http
    res.write('<h1>Hello world from Node! goodbye!</h1>');

    res.end();

}).listen(3000);*/

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});//código de estado http
    res.write('<h1>Hello world</h1>');
    res.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Server on port 3000'.yellow)
})
