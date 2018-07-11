var express = require('express');
var router = express.Router();
var launcher = process.env.LAUNCHER || 'https://hosted-scratch.herokuapp.com/launch?template=';

/* GET home page. */
router.get('/', function(req, res, next) {
  var workshops = [
    {
      name : 'Automate A Business Process with Point And Click Tools',
      description : 'Still relying on humans to take routine actions? Let\'s automate that to keep data cleaner, everyone informed, and your people focused on important work. Dive into this fun 30-minute workshop on Process Builder and walk away with automation super-tips to slim your backlog fast.',
      launchURL: launcher + 'https://github.com/mshanemc/process-automation-workshop-df17',
      docsURL : 'https://salesforce.quip.com/pMQpACuUPpGR'
    },
    {
      name : 'Build Apps that Span Heroku and Salesforce with Heroku Connect',
      description : 'We know that all of your apps won\'t run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.',
      launchURL : launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
      docsURL : 'https://salesforce.quip.com/eXsHAgQhXaa6'
    },
    {
      name: 'Take Custom Apps to the Next Level with Lightning Experience Features',
      description: 'You\'ve built your first app with no code.This 30-minute workshop will explore features available only in Lightning Experience that will make your app engaging and awesome',
      launchURL: launcher + 'https://github.com/mshanemc/volunteering-base-pkg',
      docsURL: 'https://salesforce.quip.com/PKwsAo4g5zPU'
    },
    {
      name: 'Write Code that Empowers Non-Coders',
      description: 'You\'re a developer and someone asks you to add a feature to Salesforce to “do something it doesn\'t do that needs code”.  This 30-minute workshop explores your options for working smarter, not harder when adding UI and automation in Salesforce.',
      launchURL: launcher + 'https://github.com/mshanemc/codeForClicks',
      docsURL: 'https://salesforce.quip.com/6qEJAfbdid2T'
    },
    {
      name : 'Building Apps - A Crash Course for IT Leaders',
      description : 'Build a working app in one sitting? This is your chance to explore the possibilities of our platform to let anyone in your organization build apps with skills they have.',
      launchURL: launcher + 'https://github.com/mshanemc/df17AppBuilding',
      docsURL : 'https://salesforce.quip.com/F7uJAgoEL3ce'
    },
    {
      name : 'Make Salesforce Your Back Office Agility Layer',
      description : 'Need to bring together customer data from SAP, Oracle, SharePoint, and others to create connected experiences? Try this workshop for a 30 minute dive into unlocking the most valuable data for your customers and building an Agility Layer in Salesforce with simple point and click tools.',
      launchURL : launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
      docsURL : 'https://salesforce.quip.com/quIaA12BQylG'
    },
    {
      name : 'Engage Employees with Custom Branded Community Apps',
      description : 'Today\'s workforce is hungry for engagement and collaboration. In this 30 minute guided workshop, learn how to quickly build a custom-branded employee community app with clicks, not code. You\'ll never see your Intranet the same way again!',
      launchURL: launcher + 'https://github.com/mshanemc/community-apps-workshop-df17',
      docsURL : 'https://salesforce.quip.com/NJHCAwgMV90U'
    },
    {
      name : 'Design a Captivating Community with Ease for Each Audience',
      description : 'Now you can build your community once, with a different look for each audience! In this 30 minute interactive workshop you\'ll learn how to integrate CMS and personalize experiences with audiences based on profile or location or brand',
      launchURL: launcher + 'https://github.com/mshanemc/df17-community-content-workshop',
      docsURL : 'https://salesforce.quip.com/oWM6AMv6FuWn'
    }
  ];
  res.render('index', { workshops: workshops});
});

router.get('/demos', function (req, res, next) {
  var workshops = [
    {
      name: 'Ducati: Extend CRM',
      description: 'Custom Objects help manage Bikes, Dealers, and Live Events.  A Lightning App built with Components helps organize Live Events and Process Builder keep Sales Managers in the loop.  (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/cg1',
      docsURL: 'https://salesforce.quip.com/bY08A4XodAFN'
    },
    {
      name: 'Ducati: Integrate Data from Anywhere',
      description: 'Salesorce Connect brings Invoices from an ERP system into Salesforce, including the mobile app, with no code.  (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/cg4Integrate&email=required',
      docsURL: 'https://salesforce.quip.com/sh0EAdWZDsiW'
    },
    {
      name: 'Ducati: Transform Customer Experiences',
      description: 'Our broad vision--Connected products, customer-facing mobile apps backed by Heroku + Heroku Pipelines, and Lightning seamlessly share information with Heroku Connect and Platform Events.  Some setup required, but totally worth it! (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/platform-campground-customer-exp&email=required',
      docsURL: 'https://salesforce.quip.com/pySzAu1av18a'
    },
    {
      name: 'Mobile App Dev, no code!',
      description: 'for a webinar 1/23/2018 about Salesforce Mobile.  Explores standard features, AppExchange, custom objects/actions, Connect, and more',
      launchURL: launcher + 'https://github.com/mshanemc/mobileWebinar&email=required',
      docsURL: 'https://salesforce.quip.com/a0buAtozS9PB'
    }
  ];
  res.render('demos', { workshops: workshops });
});

router.get('/in-a-box', function (req, res, next) {
  res.render('inABox');
});
module.exports = router;
