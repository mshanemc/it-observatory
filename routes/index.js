var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { workshops: workshops.getDefs(workshops.main)});
});

router.get('/:mix', function (req, res, next) {
  console.log(req.params.mix);
  res.render('index', { workshops: workshops.getDefs(workshops[req.param.mix]) })
});

// router.get('/daydreamin', function (req, res, next) {
//   res.render('index', { workshops: workshops.getDefs(workshops.daydreamin) })
// });

// router.get('/df18zone', function (req, res, next) {
//   res.render('index', { workshops: workshops.getDefs(workshops.df18zone) });
// });

// router.get('/df18rapids', function (req, res, next) {
//   res.render('index', { workshops: workshops.getDefs(workshops.df18rapids) });
// });

// router.get('/df18adoption', function (req, res, next) {
//   res.render('index', { workshops: workshops.getDefs(workshops.df18adoption) });
// });

// router.get('/adoption', function (req, res, next) {
//   res.render('index', { workshops: workshops.getDefs(workshops.adoption) });
// });

// router.get('/demos', function (req, res, next) {
//   res.render('demos', { workshops: workshops.getDefs(workshops.demos) });
// });

// router.get('/df18campground', function (req, res, next) {
//   res.render('demos', { workshops: workshops.getDefs(workshops.df18campground) });
// });



module.exports = router;
