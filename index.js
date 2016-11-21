var path = require('path');
var express = require('express');
var app = express();
var routes = require('./routes');
var log = require('./middleware/log');

// app.use(express.static(__dirname + '/public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(log);

routes(app);
app.listen(3000);
console.log("listening at port 3000");
