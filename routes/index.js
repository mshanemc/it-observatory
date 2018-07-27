var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { workshops: workshops.getDefs(['automate', 'heroku_connect', 'lightning_features', 'code_for_clicks', 'crash_course', 'agility', 'employee_community', 'audiences', 'reporting'])});
});

router.get('/daydreamin', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(['reporting', 'lightning_features', 'code_for_clicks']) })
});

router.get('/df18zone', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(['agility', 'heroku_connect', 'code_for_clicks', 'iot', 'crash_course', 'heroku_pipelines']) });
});

router.get('/df18rapids', function (req, res, next) {
  res.render('index', { workshops: workshops.getDefs(['automate', 'lightning_features', 'crash_course', 'reporting']) });
});

router.get('/demos', function (req, res, next) {
  res.render('demos', { workshops: workshops.getDefs(['demo_extend_crm', 'demo_integrate', 'demo_ducati_heroku', 'demo_grocery']) });
});

module.exports = router;
