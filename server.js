// Imports

var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;


// Instantiate server

var server = express();

// Body Parser config

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure route

server.get('/', function(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1> Fonctionnel </h1>');
});

server.use('/api/', apiRouter);

// Lauch Server

server.listen(8080, function() {
    console.log('Server OK')
});