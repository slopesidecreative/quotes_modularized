var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

// for parsing the POST body
app.use(bodyParser.urlencoded({extended: true}));
// set the static directory
app.use(express.static(__dirname + '/static'));
// set the views directory
app.set('views', __dirname + '/views');
// set EJS as the templating engine
app.set('view engine','ejs');

// fires up connection to db, loads models, loads model controllers
require('./server/config/mongoose.js');

// route magic...
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


// Listen for requests -----------------
var server = app.listen(port,function(){
   console.log('Listening on port %d',port);
});
