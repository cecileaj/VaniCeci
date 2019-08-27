var express = require('express');
var router = express.Router();
module.exports = router;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VaniCeci Marketplace' });
});


router.get('/index', function(req, res, next) {   res.render('index', { title: 'Homepage Vaniceci Marketplace' }); });

router.get('/Tops',  function(req, res, next) {   res.render('Tops', { title: 'Tops' }); })
