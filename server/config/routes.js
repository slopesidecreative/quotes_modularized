
var items =  require('../controllers/item.js')

module.exports = function(app){

   app.get('/', function (req, res){
      console.log('GET /');
      res.render('index');
   });

   app.post('/items', function (req, res){
      console.log('POST /items');
      items.create(req,res)
   });

   app.get('/items', function (req, res){
      console.log('GET /');
      items.show(req,res)
   });

}
