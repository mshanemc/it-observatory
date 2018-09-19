var launcher = process.env.LAUNCHER || 'https://hosted-scratch.herokuapp.com/launch?template=';
var launcher_pre = process.env.LAUNCHER_PRE || 'https://deployer-prerelease.herokuapp.com/launch?template=';

const workshops = [
  {
    shortname: 'automate',
    name: 'Automate A Business Process with Point And Click Tools',
    description: 'Still relying on humans to take routine actions? Let\'s automate that to keep data cleaner, everyone informed, and your people focused on important work. Dive into this fun 30-minute workshop on Process Builder and walk away with automation super-tips to slim your backlog fast.',
    launchURL: launcher + 'https://github.com/mshanemc/process-automation-workshop-df17',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-1-Automate-a-Business-Process-with-Point-and-Click-Tools.pdf'
  },
  {
    shortname: 'heroku_connect',
    name: 'Build Apps that Span Heroku and Salesforce with Heroku Connect',
    description: 'We know that all of your apps won\'t run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.',
    launchURL: launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-2-Build-Apps-that-Span-Heroku-and-Salesforce-with-Heroku-Connect.pdf'
  },
  {
    shortname: 'lightning_features',
    name: 'Take Custom Apps to the Next Level with Lightning Experience Features',
    description: 'You\'ve built your first app with no code. This 30-minute workshop will explore features available only in Lightning Experience that will make your app engaging and awesome',
    launchURL: launcher + 'https://github.com/mshanemc/volunteering-base-pkg',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-3-Take-Custom-Apps-to-the-Next-Level-with-Lightning-Experience-Features.pdf'
  },
  {
    shortname: 'code_for_clicks',
    name: 'Write Code that Empowers Non-Coders',
    description: 'You\'re a developer and someone asks you to add a feature to Salesforce to “do something it doesn\'t do that needs code”.  This 30-minute workshop explores your options for working smarter, not harder when adding UI and automation in Salesforce.',
    launchURL: launcher + 'https://github.com/mshanemc/codeForClicks',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-4-Write-Code-that-Empowers-Non-Coders.pdf'
  },
  {
    shortname: 'crash_course',
    name: 'Building Apps With Clicks - A Crash Course',
    description: 'Build a working app in one sitting? This is your chance to explore the possibilities of our platform to let anyone in your organization build apps with skills they have.',
    launchURL: launcher + 'https://github.com/mshanemc/df17AppBuilding',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-5-Building-Apps-with-Clicks-A-Crash-Course.pdf'
  },
  {
    shortname: 'agility',
    name: 'Make Salesforce Your Back Office Agility Layer',
    description: 'Need to bring together customer data from SAP, Oracle, SharePoint, and others to create connected experiences? Try this workshop for a 30 minute dive into unlocking the most valuable data for your customers and building an Agility Layer in Salesforce with simple point and click tools.',
    launchURL: launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-6-Make-Salesforce-Your-Back-Office-Agility-Layer.pdf'
  },
  {
    shortname: 'employee_community',
    name: 'Engage Employees with Custom Branded Community Apps',
    description: 'Today\'s workforce is hungry for engagement and collaboration. In this 30 minute guided workshop, learn how to quickly build a custom-branded employee community app with clicks, not code. You\'ll never see your Intranet the same way again!',
    launchURL: launcher + 'https://github.com/mshanemc/community-apps-workshop-df17',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-7-Engage-Employees-with-Custom-Branded-Community-Apps.pdf'
  },
  {
    shortname: 'audiences',
    name: 'Design a Captivating Community with Ease for Each Audience',
    description: 'Now you can build your community once, with a different look for each audience! In this 30 minute interactive workshop you\'ll learn how to integrate CMS and personalize experiences with audiences based on profile or location or brand',
    launchURL: launcher + 'https://github.com/mshanemc/df17-community-content-workshop',
    docsURL: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-8-Design-a-Captivating-Community-with-Ease-for-Each-Audience.pdf'
  },
  {
    shortname: 'reporting',
    name: 'Track Anything in Salesforce with Lightning Reports and Dashboards',
    description: 'Reports and dashboards in Lightning are better than ever.  This 30-minute hands-on workshop will walk you through the new UI and new, only-in-Lightning features.',
    launchURL: launcher + 'https://github.com/mshanemc/reporting-workshop',
    docsURL: 'https://salesforce.quip.com/xayoAhBjdcbv'
  },
  {
    shortname: 'iot',
    name: 'Connect Devices and Automate Service with Salesforce IoT',
    description: 'How do you automate service based on things happening outside of Salesforce?  This 30-minute hands-on workshop will teach you how to connect devices with Platform Events, and take actions in Salesforce IoT using rules you create—no code required! ',
    launchURL: launcher + 'https://github.com/mshanemc/iot-workshop',
    docsURL: 'https://salesforce.quip.com/F5VsAbiqUNkH'
  },
  {
    shortname: 'demo_extend_crm',
    name: 'Ducati: Extend CRM',
    description: 'Custom Objects help manage Bikes, Dealers, and Live Events.  A Lightning App built with Components helps organize Live Events and Process Builder keep Sales Managers in the loop.  (from the DF17 Campground)',
    launchURL: launcher + 'https://github.com/mshanemc/cg1',
    docsURL: 'https://salesforce.quip.com/bY08A4XodAFN'
  },
  {
    shortname: 'demo_integrate',
    name: 'Ducati: Integrate Data from Anywhere',
    description: 'Salesorce Connect brings Invoices from an ERP system into Salesforce, including the mobile app, with no code.  (from the DF17 Campground)',
    launchURL: launcher + 'https://github.com/mshanemc/cg4Integrate&email=required',
    docsURL: 'https://salesforce.quip.com/sh0EAdWZDsiW'
  },
  {
    shortname: 'demo_ducati_heroku',
    name: 'Ducati: Transform Customer Experiences',
    description: 'Our broad vision--Connected products, customer-facing mobile apps backed by Heroku + Heroku Pipelines, and Lightning seamlessly share information with Heroku Connect and Platform Events.  Some setup required, but totally worth it! (from the DF17 Campground)',
    launchURL: launcher + 'https://github.com/mshanemc/platform-campground-customer-exp&email=required',
    docsURL: 'https://salesforce.quip.com/pySzAu1av18a'
  },
  {
    shortname: 'demo_grocery',
    name: 'Mobile App Dev, no code!',
    description: 'for a webinar 1/23/2018 about Salesforce Mobile.  Explores standard features, AppExchange, custom objects/actions, Connect, and more',
    launchURL: launcher + 'https://github.com/mshanemc/mobileWebinar&email=required',
    docsURL: 'https://salesforce.quip.com/a0buAtozS9PB'
  },
  {
    shortname: 'adoption_sales',
    name: 'Elevate the Opportunity Workspace with Lightning Experience Features',
    description: 'Learn how to take advantage of the layouts and app builder to get the most out of Sales Cloud Lightning. Get on the fast track to configuring the Opportunity Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic.',
    launchURL: launcher + 'https://github.com/mshanemc/adoption-sales',
    docsURL: 'https://quip.com/cQVqAeCVBbn2'
  },
  {
    shortname: 'heroku_pipelines',
    name: 'More Apps, Less Ops: Continuous Delivery with Heroku',
    description: 'Do you have a gap between dev and release?  This 30-minute workshop walks through setting up Heroku Pipelines to streamline GitHub, CI, and Release processes for your apps and services.',
    docsURL: 'https://salesforce.quip.com/WbCTAJrd2mlp'
  },
  {
    shortname: 'adoption_service',
    name: 'Tailor Your Case View with Lightning Experience Features',
    description: 'Learn how to take advantage of the layouts and app builder to get the most out of Service Cloud Lightning. Get on the fast track to configuring the Case Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic and more productive with Actions.',
    launchURL: launcher + 'https://github.com/mshanemc/adoption-service',
    docsURL: 'https://quip.com/7irfAcFQV7hH'
  },
  {
    shortname: 'go_live',
    name: 'From Readiness Check to Rolling out Users, go Live on Lightning!',
    description: 'Are you ready to Go Live with Lightning Experience and need a little help? Join the experts to discover the next steps from running the Readniness report to enabling your users and updating your page layouts to take advantage of new Lightning Experience features.',
    launchURL: launcher + 'https://github.com/mshanemc/lightning-go-live',
    docsURL: 'https://quip.com/CZQVAT6E1rsz'
  },
  {
    shortname: 'quick_actions',
    name: 'Boost Productivity with Quick Actions',
    description: 'Learn new ways in which you can incorporate Quick Actions in Lightning to drive productivity updating records, creating multiple records at one time and updating Global Actions to save your users time and clicks.',
    launchURL: launcher + 'https://github.com/mshanemc/quick-actions',
    docsURL: 'https://quip.com/bM09AIaMpwKW'
  },
  {
    shortname: 'js_buttons',
    name: 'Move JavaScript Buttons and Actions with the Lightning Configuration Converter',
    description: 'JavaScript Buttons is one area that needs to be addressed prior to moving to Lightning Experience. Come discover the Lightning Configuration Converter to understand the manual and automated ways in which you should replace your JavaScript Buttons.',
    launchURL: launcher + 'https://github.com/mshanemc/js-buttons',
    docsURL: 'https://quip.com/RHBdAp0sApaH'
  },
  {
    shortname: 'lightning_vf',
    name: 'Make Visualforce Ready for Lightning Experience with Lightning Stylesheets and More',
    description: 'Are your Visualforce Pages ready for Lightning Experience? Come review a Visualforce Report and learn where to focus your efforts and get hands-on styling a Visualforce page to enhance its look using Lightning Stylesheets.',
    launchURL: launcher + 'https://github.com/mshanemc/lightning-vf',
    docsURL: 'https://quip.com/TXrnA5QyQ12d'
  },
  {
    shortname: 'demo_volvo_low_code',
    name: 'Empower Everyone to Build Apps with No Code',
    description: 'Volvo demo #1 for low code builders.  Objects, Fields, Validation Rules, Processes, Flows, App Builder, Components',
    launchURL: launcher_pre + 'https://github.com/mshanemc/cg1-lowcode',
    docsURL: 'https://quip.com/Ovp6AePa5wDU'
  },
  {
    shortname: 'demo_volvo_lea',
    name: 'Build Apps for Customers and Partners',
    description: 'Volvo demo #6 for external apps.  Shows customer community, community builder, and dealer community',
    launchURL: launcher_pre + 'https://github.com/mshanemc/cg6-lea',
    docsURL: 'https://salesforce.quip.com/2iKgARDJthTt'
  },
  {
    shortname: 'demo_dubsmash',
    name: 'Transform Customer Experiences',
    description: 'Dubsmash uses Heroku for their apps and services.  See teams, pipelines, process dynos, buildpacks, addons, and more that make Heroku so magical',
    docsURL: 'https://salesforce.quip.com/sakTAqiyuk6G'
  },
  {
    shortname: 'demo_volvo_iot',
    name: 'Volvo IoT and Einstein AI',
    description: 'Volvo demo #4 IoT orchestrations, context, and platform events help track scheduled maintenance for a customer\'s Volvo.  Plus prediction builder!',
    docsURL: 'https://salesforce.quip.com/Fmj7AQPxoof9',
    launchURL: launcher + 'https://github.com/mshanemc/cg4',
  },
  {
    shortname: 'demo_volvo_trust',
    name: 'Volvo Sandbox and Shield',
    description: 'Volvo demo #5: Sandboxes, Change Sets, Deployment Connections, Permissions, Encryption, Transaction Security',
    docsURL: 'https://salesforce.quip.com/sCxCAUzgweCg'
  },
  {
    shortname: 'demo_align_heroku',
    name: 'Invisalign and Heroku Connect',
    description: 'Customer website on heroku with heroku connect to send events and leads between Postgres and Lightning Platform',
    docsURL: 'https://salesforce.quip.com/FKmoA0FeESf8',
    launchURL: launcher + 'https://github.com/mshanemc/align',
  },
  {
    shortname: 'demo_sfdx_mulesoft',
    name: 'Accelerate App Dev with Pro Code Tools',
    description: 'SFDX, lightning components, Mulesoft, Azure integration, and Salesforce Connect',
    docsURL: 'https://salesforce.quip.com/Vb5qA2I1QPJk'
  }



];

module.exports = {
  getDefs: nameList => {
    const output = [];

    nameList.forEach(name => {
      try {
        const found = workshops.find(workshop => workshop.shortname === name);
        if (found) {
          output.push(found);
        } else {
          console.log(`not found: ${name}`);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return output;
  },

  main: ['automate', 'heroku_connect', 'lightning_features', 'code_for_clicks', 'crash_course', 'agility', 'reporting'],
  daydreamin: ['reporting', 'lightning_features', 'code_for_clicks'],
  df18zone: ['agility', 'heroku_connect', 'code_for_clicks', 'iot', 'crash_course', 'lightning_vf', 'js_buttons', 'heroku_pipelines'],
  df18rapids: ['automate', 'agility', 'crash_course', 'reporting'],
  demos: ['demo_extend_crm', 'demo_integrate', 'demo_ducati_heroku', 'demo_grocery'],
  df18campground: ['demo_volvo_low_code', 'demo_volvo_lea', 'demo_dubsmash', 'demo_volvo_iot', 'demo_volvo_trust', 'demo_align_heroku', 'demo_sfdx_mulesoft'],
  df18adoption: ['adoption_sales', 'adoption_service', 'go_live', 'quick_actions'],
  adoption: ['adoption_sales', 'adoption_service', 'go_live', 'quick_actions', 'reporting', 'lightning_features', 'lightning_vf', 'js_buttons']
};