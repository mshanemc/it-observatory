var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.main)});
});

router.get('/daydreamin', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.daydreamin) })
});

router.get('/df18zone', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.df18zone) });
});

router.get('/df18rapids', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.df18rapids) });
});

router.get('/demos', function (req, res, next) {
  res.render('demos', { workshops: workshops.getDefs(workshops.demos) });
});

module.exports = router;
