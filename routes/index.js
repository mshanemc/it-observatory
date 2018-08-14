var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.main)});
});

router.get('/:mix', function (req, res, next) {
  if (workshops[req.params.mix]){
    res.render('index', { workshops: workshops.getDefs(workshops[req.params.mix]) });
  } else {
    res.render('error', { message: `Not found: ${req.params.mix}`, error : { status: 404}});
  }
});

module.exports = router;
