var express = require('express');
var router = express.Router();
function routers(nav){
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post("/post",function(req,res,next){
 res.render("index",{nav,title:"Index"});
});
return router
}
module.exports = routers;