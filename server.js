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

var mongoose = require('mongoose');
var db = 'mongodb://localhost/quotes';

mongoose.connect(db,function(){
   console.log('mongoose connected');
});

var ItemSchema = new mongoose.Schema({
 name: String,
 quote: String
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

module.exports = mongoose.model('item',ItemSchema);

var Item = mongoose.model('Item',ItemSchema);

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);


// BEGIN listening for requests -----------------
var server = app.listen(port,function(){
   console.log('Listening on port %d',port);
});
