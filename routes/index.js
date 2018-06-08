var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  res.render('mobileHome');
});
router.get('/', function(req, res, next) {
    res.render('home');
});
router.get('/talant', function(req, res, next) {
    res.render('talant');
});
module.exports = router;
