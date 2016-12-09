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
