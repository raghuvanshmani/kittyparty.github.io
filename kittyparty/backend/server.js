require('./db');
const express = require('express');
var app = express();
const bodyParser = require('body-parser')
var postMessageRoutes = require('./Controller/postmessage');


app.use(bodyParser.json())
app.use(function (req, res, next) {
    var origin = req.headers.origin;
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(5000, () => console.log('server runnig at port no 5000'));
app.use('/post', postMessageRoutes);
