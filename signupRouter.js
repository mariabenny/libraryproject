var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('signup');
});
router.post("/post",function(req,res,next){
res.render('login');
});
module.exports = router;