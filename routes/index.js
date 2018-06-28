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
router.get('/company', function(req, res, next) {
    res.render('company');
});
router.get('/project', function(req, res, next) {
    res.render('project');
});
router.get('/singleCompany', function(req, res, next) {
    res.render('singleCompany');
});
router.get('/singleProject', function(req, res, next) {
    res.render('singleProject');
});
router.get('/singleTalant', function(req, res, next) {
    res.render('singleTalant');
});
router.get('/cabinet', function(req, res, next) {
    res.render('cabinet');
});
module.exports = router;
