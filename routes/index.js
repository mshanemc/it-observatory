var express = require('express');
var router = express.Router();
var launcher = process.env.LAUNCHER || 'https://hosted-scratch-qa.herokuapp.com/launch?template=';

/* GET home page. */
router.get('/', function(req, res, next) {
  var workshops = [
    {
      name : 'Building Apps - A Crash Course for IT Leaders',
      description : 'Build a working app in one sitting? This is your chance to explore the possibilities of our platform to let anyone in your organization build apps with skills they have.',
      launchURL: launcher + 'https://github.com/mshanemc/df17AppBuilding',
      docsURL : 'https://salesforce.quip.com/F7uJAgoEL3ce'
    },
    {
      name : 'Make Salesforce Your Back Office Agility Layer',
      description : 'Need to bring together customer data from SAP, Oracle, SharePoint, and others to create connected experiences? Try this workshop for a 30 minute dive into unlocking the most valuable data for your customers and building an Agility Layer in Salesforce with simple point and click tools.',
      launchURL : launcher + 'https://github.com/mshanemc/DF17integrationWorkshops',
      docsURL : 'https://salesforce.quip.com/quIaA12BQylG'
    },
    {
      name : 'Build Apps that Span Heroku and Salesforce with Heroku Connect',
      description : 'We know that all of your apps won\'t run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.',
      launchURL : launcher + 'https://github.com/mshanemc/DF17integrationWorkshops',
      docsURL : 'https://salesforce.quip.com/eXsHAgQhXaa6'
    },
    {
      name : 'Automate A Business Process with Point And Click Tools',
      description : 'Still relying on humans to take routine actions? Let\'s automate that to keep data cleaner, everyone informed, and your people focused on important work. Dive into this fun 30-minute workshop on Process Builder and walk away with automation super-tips to slim your backlog fast.',
      launchURL: launcher + 'https://github.com/mshanemc/process-automation-workshop-df17',
      docsURL : 'https://salesforce.quip.com/pMQpACuUPpGR'
    },
    {
      name : 'Engage Employees with Custom Branded Community Apps',
      description : 'Today\'s workforce is hungry for engagement and collaboration. In this 30 minute guided workshop, learn how to quickly build a custom-branded employee community app with clicks, not code. You\'ll never see your Intranet the same way again!',
      launchURL: launcher + 'https://github.com/mshanemc/community-apps-workshop-df17',
      docsURL : 'https://salesforce.quip.com/NJHCAwgMV90U'
    },
    {
      name : 'Design a Captivating Community with Ease for Each Audience',
      description : 'Now you can build your community once, with a different look for each audience! In this 30 minute interactive workshop you\'ll learn how to integrate CMS content with just a few clicks, and create personaized page experiences with audience targeting based on profile or location and brand. Make your community more engaging by integrating and personalizing content.',
      launchURL: launcher + 'https://github.com/mshanemc/df17-community-content-workshop',
      docsURL : 'https://salesforce.quip.com/oWM6AMv6FuWn'
    }
  ];
  res.render('index', { workshops: workshops});
});

module.exports = router;

/*
mobile wording:

To use the mobile app, create a new user [**Setup > Users > New **] and create a user with your email address (change the username to a fake email address to avoid username conflicts!).  Then check your email, follow the instructions and login to the Salesforce mobile app with that username/password, from **test.salesforce.com**


*/


