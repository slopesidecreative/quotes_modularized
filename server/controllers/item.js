
var mongoose   = require('mongoose');
var moment     = require('moment');

var Item       = mongoose.model('Item');

module.exports = {

   show: function (req,res){
      console.log('Item: show');
      Item.find({}, function(err, data) {
         if(err){
            console.log('error: ',err);
            res.redirect('/',{errors:err});
         }else{
            res.render('index',{items:data, moment: moment});
         }
      })
   },
   create: function (req, res){
      console.log('Item: create');
      var item = new Item({
         name: req.body.name,
         quote: req.body.quote
      });
      item.save(function(err){
         if(err){
            console.log('error',err);
            res.redirect('/',{errors:err});
         }
         res.redirect('/items');
      })
   }

} // closes exports
