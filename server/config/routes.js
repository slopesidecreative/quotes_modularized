
var mongoose = require('mongoose');
var moment = require('moment');

var Item = mongoose.model('Item');

// ROUTES --------------------------------------
module.exports = function(app){
   // "/"
   // Root - show all
   app.get('/', function (req, res){
      console.log('Create item: form');
      res.render('index')
   });
   /* POST
      /items
      Create a new item based on form submission.
   */
   app.post('/items', function (req, res){
      console.log('Create item: action. Quote: ',req.body.quote);
      var item = new Item({
         name: req.body.name,
         quote: req.body.quote
      });
      item.save(function(err){
         if(err){
            console.log('error',err);
            res.redirect('/404',{errors:err});
         }
         res.redirect('/items');
      })

   });
   /*
      GET /items
      Show all items.
   */
   app.get('/items', function (req, res){
      console.log('Show all items.');
      Item.find({}, function(err, data) {
         if(err){
            console.log('error: ',err);
            res.redirect('/404',{errors:err});
         }else{
            res.render('index',{items:data, moment: moment});
         }
      })
   });

   // "/404"
   // Error
   app.get('/404', function (err){
      console.log('ERROR ',err);
      res.render('404',{errors:err});
   });
}
