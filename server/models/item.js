
var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
 name: String,
 quote: String
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

var Item = mongoose.model('Item',ItemSchema);
