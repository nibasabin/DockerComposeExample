// Require express and create an instance of it
var express = require('express');
var cors = require("cors")
var app = express();
app.use(cors())
// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    console.log("server hit");
    res.send(`{"data":"this is output"}`);
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3001, function () {
    console.log('Example app listening on port 3001.');
});