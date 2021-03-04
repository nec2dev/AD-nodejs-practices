const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req,res){
    res.send('<h1>Hello World with express and Nodejs</h1>');
    res.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000'.green);
});