import { Deployable } from '../../../typeDefs';

const launcher = 'https://hosted-scratch.herokuapp.com/launch?template=';
// eslint-disable-next-line no-unused-vars
const launcher_pre = 'https://deployer-prerelease.herokuapp.com/launch?template=';

const workshops: Deployable[] = [
    {
        shortname: 'lwc',
        name: 'Workshop: 5 Things You Can Now Do with Lightning Web Components',
        description:
            'Lightning Web Components (LWC) launched with a bang. Whether you have used them before or are brand new, join this workshop to learn five ways LWC improve developer productivity.',
        launchURL: launcher + 'https://github.com/mshanemc/lwc-workshop',
        docsURL: 'https://salesforce.quip.com/zyReABEBOtK5'
    },

    {
        shortname: 'epb',
        name: 'Add AI Predictions to Your Custom Objects with Einstein Prediction Builder',
        description:
            'Want to use the power of Einstein in your custom apps? Learn how to take your current objects and data in Salesforce, and build predictions based on them.  No code or data science experience required.',
        launchURL: launcher + 'https://github.com/mshanemc/epb-workshop',
        docsURL: 'https://salesforce.quip.com/DsKRAZg9MRNn'
    },
    {
        shortname: 'flows',
        name: 'Learn New Tricks for the New Flow Builder',
        description:
            'Get hands on with the new Flow Builder and create a no-code integration to a 3rd party API so you can use it in your flows and deliver a seamless UI to your users',
        launchURL: launcher + 'https://github.com/mshanemc/flow-workshop',
        docsURL: 'https://salesforce.quip.com/t6u5AbPUvhxY'
    },
    {
        shortname: 'console_apps',
        name: 'Boost Productivity with Console Apps',
        description:
            'In this workshop, you will get hands on with a Console App and learn how to maximize user productivity through features like Console navigation, Quick Text and Macros.',
        launchURL: launcher + 'https://github.com/mshanemc/adoption-service',
        docsURL: 'https://salesforce.quip.com/tLICALPsrTWb'
    },
    {
        shortname: 'flows_simple',
        name: 'Get started with the new Flow Builder',
        description:
            "We know Flow can be intimidating. So we've partnered with Jennifer Lee, automation all-star and Lightning Champion, to help you understand what Flow is all about and to help you get started with the new Flow Builder. In this workshop, you will learn about the foundational building blocks of Flow and build your very first flow.",
        launchURL: launcher + 'https://github.com/mshanemc/flows-simple',
        docsURL: 'https://salesforce.quip.com/qN8KAZb8xT5Y'
    },
    {
        shortname: 'automate',
        name: 'Automate A Business Process with Point And Click Tools',
        description:
            "Still relying on humans to take routine actions? Let's automate that to keep data cleaner, everyone informed, and your people focused on important work. Dive into this fun 30-minute workshop on Process Builder and walk away with automation super-tips to slim your backlog fast.",
        launchURL: launcher + 'https://github.com/mshanemc/process-automation-workshop-df17',
        internalDocsURL: 'https://salesforce.quip.com/pMQpACuUPpGR',
        docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdv/aw_hTQB2MzP_YrQF81nAKJ.RoOiS4srqKjdLeYiAia4'
    },
    {
        shortname: 'heroku_connect',
        name: 'Build Apps that Span Heroku and Salesforce with Heroku Connect',
        description:
            "We know that all of your apps won't run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.",
        launchURL: launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
        internalDocsURL: 'https://salesforce.quip.com/eXsHAgQhXaa6',
        docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdq/ApV8wFxmSvWWb8PEgPUyyFV6zl9uvV112J0msTcS.mw'
    },
    {
        shortname: 'heroku_connect_TH',
        name: 'Build Apps that Span Heroku and Salesforce with Heroku Connect',
        description:
            "We know that all of your apps won't run on Force infrastructure because of architectural or talent reasons. Take this 30-minute workshop to see how Heroku lets professional developers build apps without creating new data silos or integration headaches.",
        // launchURL: launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
        internalDocsURL: 'https://salesforce.quip.com/8uRzAUqScOtA',
        docsURL: 'https://trailhead.salesforce.com/content/learn/projects/quickstart-heroku-connect'
    },
    {
        shortname: 'lightning_features',
        name: 'Take Custom Apps to the Next Level with Lightning Experience Features',
        description:
            "You've built your first app with no code. This 30-minute workshop will explore features available only in Lightning Experience that will make your app engaging and awesome",
        launchURL: launcher + 'https://github.com/mshanemc/volunteering-base-pkg',
        internalDocsURL: 'https://salesforce.quip.com/PKwsAo4g5zPU',
        docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000Fkdl/gPOcHdq_oUW8Ary3Udov9Bi6x3T5sXyyMofvnn3ea5Y'
    },
    {
        shortname: 'code_for_clicks',
        name: 'Write Code that Empowers Non-Coders',
        description:
            "You're a developer and someone asks you to add a feature to Salesforce to “do something it doesn't do that needs code”.  This 30-minute workshop explores your options for working smarter, not harder when adding UI and automation in Salesforce.",
        launchURL: launcher + 'https://github.com/mshanemc/codeForClicks',
        docsURL: 'https://salesforce.quip.com/6qEJAfbdid2T'
    },
    {
        shortname: 'new_mobile_app',
        name: 'Get Ready for the New Salesforce Mobile App',
        description: '',
        internalDocsURL: 'https://salesforce.quip.com/R5qbA0l96hro',
        docsURL: 'https://trailhead.salesforce.com/content/learn/projects/quick-start-set-up-lightning-experience-on-mobile'
    },
    {
        shortname: 'nba',
        name: 'Build Your Strategy with Einstein Next Best Action',
        description:
            'Get hands-on with Einstein Next Best Action! Join us in this workshop to learn more about Einstein Next Best Action and how to build a strategy that enables you to produce recommendations for your end users.',
        // internalDocsURL: 'https://salesforce.quip.com/R5qbA0l96hro',
        docsURL: 'https://salesforce.quip.com/GHYEAMjTP8RQ',
        launchURL: launcher_pre + 'https://github.com/mcasalaina/epbnbascratchorg'
    },
    {
        shortname: 'epb_nba',
        name: 'Put Predictions In Action with Einstein Prediction Builder and Next Best Action',
        description: `Learn how to harness the power of both Einstein Prediction Builder and Einstein Next Best Action to produce recommendations to your end users that are powered by Einstein!`,
        docsURL: 'https://salesforce.quip.com/i9doAI92gRzX',
        launchURL: launcher_pre + 'https://github.com/mcasalaina/epbnbascratchorg'
    },

    {
        shortname: 'vision_language',
        name: 'Get Hands-on with the Einstein Vision and Language Model Builder',
        description: `Before when you wanted to use Einstein Vision and Language, you needed to make API calls from the command line with cURL or a tool like Postman. Now, you can use the Einstein Vision and Language Model Builder by Salesforce Labs to create datasets, build models, and make predictions without leaving Salesforce. During this workshop, you'll learn everything you need to know to make predictions on unstructured data like images and text using our newest app — available free on the AppExchange. Less work. Faster implementation.`
        // internalDocsURL: 'https://salesforce.quip.com/R5qbA0l96hro',
        // docsURL: 'https://trailhead.salesforce.com/content/learn/projects/quick-start-set-up-lightning-experience-on-mobile'
    },
    {
        shortname: 'einstein_discovery',
        name: 'Get Started with Einstein Discovery',
        description: `Different business processes require different strategies for building predictions, whether it involves external data or data right inside your CRM. Join this hands-on workshop to learn how you can apply Einstein Discovery to common business challenges using the power of AI and machine learning.`,
        launchURL: launcher_pre + 'https://github.com/mcasalaina/einsteinanalysticsscratch',
        // internalDocsURL: 'https://salesforce.quip.com/R5qbA0l96hro',
        docsURL: 'https://salesforce.quip.com/tl0yAK5rMaYv'
    },
    {
        shortname: 'crash_course',
        name: 'Building Apps With Clicks - A Crash Course',
        description:
            'Build a working app in one sitting? This is your chance to explore the possibilities of our platform to let anyone in your organization build apps with skills they have.',
        launchURL: launcher + 'https://github.com/mshanemc/df17AppBuilding',
        internalDocsURL: 'https://salesforce.quip.com/F7uJAgoEL3ce',
        docsURL: 'https://salesforce.quip.com/F7uJAgoEL3ce'
    },
    {
        shortname: 'agility',
        name: 'Make Salesforce Your Back Office Agility Layer',
        description:
            'Need to bring together customer data from SAP, Oracle, SharePoint, and others to create connected experiences? Try this workshop for a 30 minute dive into unlocking the most valuable data for your customers and building an Agility Layer in Salesforce with simple point and click tools.',
        internalDocsURL: 'https://salesforce.quip.com/quIaA12BQylG',
        launchURL: launcher + 'https://github.com/mshanemc/DF17integrationWorkshops&email=required',
        docsURL: 'https://salesforce.quip.com/quIaA12BQylG'
    },
    {
        shortname: 'cdc',
        name: 'Change Data Capture (CDC)',
        description:
            "Salesforce has enabled a bunch of new features for Event Driven Architectures.  During this workshop, we'll activate Change Data Capture and use change events in 3 different scenarios: reactive Salesforce UIs, asynchronous triggers, and apps running outside of Salesforce.",
        launchURL: launcher + 'https://github.com/mshanemc/cdc-workshop',
        docsURL: 'https://salesforce.quip.com/ivR4ASYKOFig'
    },
    {
        shortname: 'employee_community',
        name: 'Engage Employees with Custom Branded Community Apps',
        description:
            "Today's workforce is hungry for engagement and collaboration. In this 30 minute guided workshop, learn how to quickly build a custom-branded employee community app with clicks, not code. You'll never see your Intranet the same way again!",
        launchURL: launcher + 'https://github.com/mshanemc/community-apps-workshop-df17',
        docsURL:
            'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-7-Engage-Employees-with-Custom-Branded-Community-Apps.pdf'
    },
    {
        shortname: 'audiences',
        name: 'Design a Captivating Community with Ease for Each Audience',
        description:
            "Now you can build your community once, with a different look for each audience! In this 30 minute interactive workshop you'll learn how to integrate CMS and personalize experiences with audiences based on profile or location or brand",
        launchURL: launcher + 'https://github.com/mshanemc/df17-community-content-workshop',
        docsURL:
            'https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/campaign/lightning-platform-wsiab/workshop-guide-8-Design-a-Captivating-Community-with-Ease-for-Each-Audience.pdf'
    },
    {
        shortname: 'reporting',
        name: 'Track Anything in Salesforce with Lightning Reports and Dashboards',
        description:
            'Reports and dashboards in Lightning are better than ever.  This 30-minute hands-on workshop will walk you through the new UI and new, only-in-Lightning features.',
        launchURL: launcher + 'https://github.com/mshanemc/reporting-workshop',
        internalDocsURL: 'https://salesforce.quip.com/xayoAhBjdcbv',
        docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000FlQ9/05rX658z51XeM4ja98Rcy.PJM0ZIuk3P2L5KRAO._2w'
    },
    {
        shortname: 'iot',
        name: 'Connect Devices and Automate Service with Salesforce IoT',
        description:
            'How do you automate service based on things happening outside of Salesforce?  This 30-minute hands-on workshop will teach you how to connect devices with Platform Events, and take actions in Salesforce IoT using rules you create—no code required! ',
        launchURL: launcher + 'https://github.com/mshanemc/iot-workshop',
        docsURL: 'https://salesforce.quip.com/KpGCA3REE3Gs'
    },
    {
        shortname: 'demo_extend_crm',
        name: 'Ducati: Extend CRM',
        description:
            'Custom Objects help manage Bikes, Dealers, and Live Events.  A Lightning App built with Components helps organize Live Events and Process Builder keep Sales Managers in the loop.  (from the DF17 Campground)',
        launchURL: launcher + 'https://github.com/mshanemc/cg1',
        docsURL: 'https://salesforce.quip.com/bY08A4XodAFN'
    },
    {
        shortname: 'demo_integrate',
        name: 'Ducati: Integrate Data from Anywhere',
        description:
            'Salesorce Connect brings Invoices from an ERP system into Salesforce, including the mobile app, with no code.  (from the DF17 Campground)',
        launchURL: launcher + 'https://github.com/mshanemc/cg4Integrate&email=required',
        docsURL: 'https://salesforce.quip.com/sh0EAdWZDsiW'
    },
    {
        shortname: 'demo_ducati_heroku',
        name: 'Ducati: Transform Customer Experiences',
        description:
            'Our broad vision--Connected products, customer-facing mobile apps backed by Heroku + Heroku Pipelines, and Lightning seamlessly share information with Heroku Connect and Platform Events.  Some setup required, but totally worth it! (from the DF17 Campground)',
        launchURL: launcher + 'https://github.com/mshanemc/platform-campground-customer-exp&email=required',
        docsURL: 'https://salesforce.quip.com/pySzAu1av18a'
    },
    {
        shortname: 'demo_grocery',
        name: 'Mobile App Dev, no code!',
        description:
            'for a webinar 1/23/2018 about Salesforce Mobile.  Explores standard features, AppExchange, custom objects/actions, Connect, and more',
        launchURL: launcher + 'https://github.com/mshanemc/mobileWebinar&email=required',
        docsURL: 'https://salesforce.quip.com/a0buAtozS9PB'
    },
    {
        shortname: 'adoption_sales',
        name: 'Elevate the Opportunity Workspace with Lightning Experience Features',
        description:
            'Learn how to take advantage of the layouts and app builder to get the most out of Sales Cloud Lightning. Get on the fast track to configuring the Opportunity Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic.',
        launchURL: launcher + 'https://github.com/mshanemc/adoption-sales',
        docsURL: 'https://quip.com/cQVqAeCVBbn2'
    },
    {
        shortname: 'heroku_pipelines',
        name: 'More Apps, Less Ops: Continuous Delivery with Heroku',
        description:
            'Do you have a gap between dev and release?  This 30-minute workshop walks through setting up Heroku Pipelines to streamline GitHub, CI, and Release processes for your apps and services.',
        docsURL: 'https://salesforce.quip.com/WbCTAJrd2mlp'
    },
    {
        shortname: 'adoption_service',
        name: 'Tailor Your Case View with Lightning Experience Features',
        description:
            'Learn how to take advantage of the layouts and app builder to get the most out of Service Cloud Lightning. Get on the fast track to configuring the Case Workspace in creative new ways with standard components like Path and take advantage of key capabilities to make your workspace dynamic and more productive with Actions.',
        launchURL: launcher + 'https://github.com/mshanemc/adoption-service',
        docsURL: 'https://quip.com/7irfAcFQV7hH'
    },
    {
        shortname: 'go_live',
        name: 'From Readiness Check to Rolling out Users, go Live on Lightning!',
        description:
            'Are you ready to Go Live with Lightning Experience and need a little help? Join the experts to discover the next steps from running the Readniness report to enabling your users and updating your page layouts to take advantage of new Lightning Experience features.',
        launchURL: launcher + 'https://github.com/mshanemc/lightning-go-live',
        docsURL: 'https://quip.com/CZQVAT6E1rsz'
    },
    {
        shortname: 'new_mobile_app2',
        name: 'Get Ready for the New Salesforce mobile app',
        description: `Get hands on with the new Mobile app! In this workshop, you will learn how to take existing Lightning customizations to your users' phones, and walk away with some common tips to make pages better for both mobile and desktop.`,
        launchURL: launcher + 'https://github.com/mshanemc/new-mobile-app',
        docsURL: 'https://salesforce.quip.com/BY0cAfYd3qe3'
    },
    {
        shortname: 'quick_actions',
        name: 'Boost Productivity with Quick Actions',
        description:
            'Learn new ways in which you can incorporate Quick Actions in Lightning to drive productivity updating records, creating multiple records at one time and updating Global Actions to save your users time and clicks.',
        launchURL: launcher + 'https://github.com/mshanemc/quick-actions',
        docsURL: 'https://quip.com/bM09AIaMpwKW'
    },
    {
        shortname: 'js_buttons',
        name: 'Move JavaScript Buttons and Actions with the Lightning Configuration Converter',
        description:
            'JavaScript Buttons is one area that needs to be addressed prior to moving to Lightning Experience. Come discover the Lightning Configuration Converter to understand the manual and automated ways in which you should replace your JavaScript Buttons.',
        launchURL: launcher + 'https://github.com/mshanemc/js-buttons',
        docsURL: 'https://quip.com/RHBdAp0sApaH'
    },
    {
        shortname: 'user_engagement',
        name: 'Improve Adoption with User Engagement Platform Tools',
        description: 'Use the new User Engagement platform to engage and encourage your users to stay in Lightning Experience.',
        launchURL: launcher + 'https://github.com/mshanemc/adoption-engagement-tools',
        docsURL: 'https://salesforce.quip.com/Si38Ay3jInqD'
    },

    {
        shortname: 'lex_now_what',
        name: 'Lightning Experience Is Here, What Now',
        description: 'Learn how to make simple updates to your Salesforce org to make Lightning Experience more than a new UI for your users.',
        launchURL: launcher + 'https://github.com/mshanemc/lightning-now-what',
        docsURL: 'https://salesforce.quip.com/LAafAMElLbYu'
    },
    {
        shortname: 'empower_flow',
        name: 'Empower your Users with Flow in Lightning Apps and Pages',
        description: `You've heard Flow is a great tool to automate processes and engage users, but have you seen all of the ways Flow can be used in Lightning Experience? In this workshop you will add Flows to Lightning Apps and Lightning Components to surface screen flows where and when your users need them!`,
        launchURL: launcher + 'https://github.com/mshanemc/df19-flow-workshop',
        docsURL: 'https://salesforce.quip.com/F1FGAmlbwNSV'
    },
    {
        shortname: 'lightning_vf',
        name: 'Make Visualforce Ready for Lightning Experience with Lightning Stylesheets and More',
        description:
            'Are your Visualforce Pages ready for Lightning Experience? Come review a Visualforce Report and learn where to focus your efforts and get hands-on styling a Visualforce page to enhance its look using Lightning Stylesheets.',
        launchURL: launcher + 'https://github.com/mshanemc/lightning-vf',
        docsURL: 'https://quip.com/TXrnA5QyQ12d'
    },
    {
        shortname: 'cpq',
        name: 'Salesforce CPQ Admin Workshop',
        description:
            'Salesforce CPQ is providing you an opportunity for an in-depth hands-on walkthrough of Salesforce CPQ. The workshop will give you first-hand experience in administering Salesforce CPQ as we walk through a series of hands-on exercises in the product so you can learn how to leverage the Salesforce platform to take your business to the next level.',
        launchURL: launcher + 'https://github.com/mshanemc/cpq-workshop',
        docsURL: 'https://org62.my.salesforce.com/sfc/p/000000000062/a/0M000000NMcz/ARRuQmp4l2sEgVA328NeZek.r_02tWXiPto_XycHAOw'
    },
    {
        shortname: 'demo_volvo_low_code',
        name: 'Empower Everyone to Build Apps with No Code',
        description: 'Volvo demo #1 for low code builders.  Objects, Fields, Validation Rules, Processes, Flows, App Builder, Components',
        launchURL: launcher + 'https://github.com/mshanemc/cg1-lowcode',
        docsURL: 'https://quip.com/Ovp6AePa5wDU'
    },
    {
        shortname: 'demo_volvo_lea',
        name: 'Build Apps for Customers and Partners',
        description: 'Volvo demo #6 for external apps.  Shows customer community, community builder, and dealer community',
        launchURL: launcher + 'https://github.com/mshanemc/cg6-lea',
        docsURL: 'https://salesforce.quip.com/2iKgARDJthTt'
    },
    {
        shortname: 'demo_dubsmash',
        name: 'Transform Customer Experiences',
        description:
            'Dubsmash uses Heroku for their apps and services.  See teams, pipelines, process dynos, buildpacks, addons, and more that make Heroku so magical',
        docsURL: 'https://salesforce.quip.com/sakTAqiyuk6G'
    },
    {
        shortname: 'demo_volvo_iot',
        name: 'Volvo IoT and Einstein AI',
        description:
            "Volvo demo #4 IoT orchestrations, context, and platform events help track scheduled maintenance for a customer's Volvo.  Plus prediction builder!",
        docsURL: 'https://salesforce.quip.com/Fmj7AQPxoof9',
        launchURL: launcher + 'https://github.com/mshanemc/cg4'
    },
    {
        shortname: 'demo_volvo_trust',
        name: 'Volvo Sandbox and Shield',
        description: 'Volvo demo #5: Sandboxes, Change Sets, Deployment Connections, Permissions, Encryption, Transaction Security',
        docsURL: 'https://salesforce.quip.com/sCxCAUzgweCg'
    },
    {
        shortname: 'easy_spaces',
        name: 'Easy Spaces',
        description:
            "From the trailhead team's sample gallery.  Sample event management application. Easy Spaces is a fictional event management company. This application helps Easy Spaces event coordinators manage reservations and find the right theme for their customers. Regardless of the industry you work in, this app demonstrates how to build flexible, user-centric experiences with dynamic flows, Flow Actions, and object-agnostic Lightning components. This app also demonstrates how to structure your source code for modular distribution using unlocked packages.",
        docsURL: 'https://trailhead.salesforce.com/sample-gallery',
        launchURL: launcher + 'https://github.com/mshanemc/easy-spaces'
    },
    {
        shortname: 'demo_align_heroku',
        name: 'Invisalign and Heroku Connect',
        description: 'Customer website on heroku with heroku connect to send events and leads between Postgres and Lightning Platform',
        docsURL: 'https://salesforce.quip.com/FKmoA0FeESf8',
        launchURL: launcher + 'https://github.com/mshanemc/align'
    },
    {
        shortname: 'demo_sfdx_mulesoft',
        name: 'Accelerate App Dev with Pro Code Tools',
        description: 'SFDX, lightning components, Mulesoft, Azure integration, and Salesforce Connect',
        docsURL: 'https://salesforce.quip.com/Vb5qA2I1QPJk'
    },
    {
        shortname: 'demo_encryption',
        name: 'Shield: Platform Encryption',
        description: 'Encrypt fields, search index, chatter, attachments, and platform events with Shield',
        docsURL: 'https://salesforce.quip.com/mQPVA3LL303r',
        launchURL: launcher + 'https://github.com/mshanemc/encryption-demo'
    },
    {
        shortname: 'demo_rviot',
        name: 'Lippert IoT Demo',
        description: 'Connected product service use case for IoT, from TDX18.  Lippert makes RV components',
        docsURL: 'https://salesforce.quip.com/Hm38AYycTIjb',
        launchURL: launcher + 'https://github.com/mshanemc/rviot'
    },
    {
        shortname: 'demo_employeeengagement',
        name: 'Employee Engagement',
        description:
            "Electron Motors branded demo of SSO/Aloha, a chatter-powered intranet, Cadalys Concierge, and employee apps (org chart and safety reporting).  There's even a story for the BRK",
        docsURL: 'https://salesforce.quip.com/JHbUACURUYc1',
        launchURL: launcher + 'https://github.com/mshanemc/solutions-engagement'
    },
    {
        shortname: 'demo_custExp',
        name: 'Customer Experience',
        description: 'Electron Motors branded demo of Heroku, Lightning External Apps, and External Identity.  Some assembly required',
        docsURL: 'https://salesforce.quip.com/prigALiQl9rD',
        launchURL: launcher + 'https://github.com/mshanemc/custexp'
    },
    {
        shortname: 'demo_departmental',
        name: 'Departmental Apps',
        description: 'Electron Motors branded demo of app builder, mobile, flows, prediction builder, object creator',
        docsURL: 'https://salesforce.quip.com/8HZrAw1eImuD',
        launchURL: launcher + 'https://github.com/mshanemc/solutions-departmental-apps'
    },
    {
        shortname: 'demo_devexp',
        name: 'Developer Experience',
        description:
            "4 demos for IT audiences...Electron Motor's branded focusing on low-code, developer productivity with Lightning, developer productivity with Heroku, and data integration.  The guide also contains the recorded webinar and each demo's instructions",
        docsURL: 'https://salesforce.quip.com/vEj3A3LyUkeh',
        launchURL: launcher + 'https://github.com/gabesumner/solutions-DX'
    },
    {
        shortname: 'electron_core_object',
        name: 'Electron Motors Core Object Demo',
        description: 'Tell the full platform story with our fake car company and the Core Object concept',
        docsURL: 'https://docs.google.com/presentation/d/16ewwBG9NN5F7RDpm0LcFfkt-s25HYzCIj4tXmyvSLX8/edit#slide=id.g54fd34ed74_0_322',
        launchURL: launcher + 'https://github.com/gabesumner/electron-motors-sfdx'
    },

    // df 19 campground demos
    {
        name: 'App Builder Wall',
        shortname: 'app-wall',
        description: 'hands on with the new mobile app in App Builder',
        docsURL: 'https://salesforce.quip.com/uk2dAiQeGd7i',
        launchURL: launcher + 'https://github.com/gabesumner/app-builder-wall'
    },
    {
        name: 'Demo 1: Transform the Employee Experience',
        shortname: 'df19cg1',
        description: 'booth 1 (mule, workday, salesforce, identity, mobile, lwc)',
        docsURL: 'https://salesforce.quip.com/x3cCA7jxbjaj',
        launchURL: launcher + 'https://github.com/mshanemc/solutions-engagement/tree/df19'
    },
    {
        name: 'Demo 2: Empower Employees with Intelligent Self-Service',
        shortname: 'df19cg2',
        description: 'booth 2 (concierge, knowledge, chatbots)',
        docsURL: 'https://salesforce.quip.com/IB1DAifIANFy',
        launchURL: launcher + 'https://github.com/mshanemc/solutions-engagement/tree/df19'
    },
    {
        name: 'Demo 3: Departmental Apps',
        shortname: 'df19cg3',
        description: 'booth 3 (prediction builder, lightning platform)',
        docsURL: 'https://salesforce.quip.com/RnqcArZV2hAJ',
        launchURL: launcher + 'https://github.com/gabesumner/df19-departmental-productivity'
    },
    {
        name: 'Demo 6: Build Amazing Customer Experiences',
        shortname: 'df19cg6',
        description: 'booth 6 (heroku + heroku shield, heroku enterprise, private spaces)',
        docsURL: 'https://salesforce.quip.com/HdJFARzV976h',
        launchURL: launcher + 'https://github.com/mshanemc/custexp/tree/df19-heroku-only'
    },
    {
        name: 'DF19 Hands On Workshop:',
        shortname: 'df19AAHOW',
        description: 'Getting Started with AppExchange App Analytics for ISVs',
        docsURL: '',
        launchURL: launcher + 'https://github.com/CairlinnSolutions/DF19AAHOW'
    },
    {
        name: 'Codeys Demo',
        shortname: 'ADKCodey',
        description: 'Codeys Base Demo',
        docsURL: '',
        launchURL: launcher + 'https://github.com/Vchalem/CreditLineIncreaseApp'
    },
    {
        name: 'DF19 Workshop | Design Beautiful Dashboards in Einstein Analytics',
        shortname: 'sfdx-ea-df19workshop-design',
        description:
            'Get hands on experience applying design principles in Einstein Analytics. Learn how to design user-centered experiences for your apps and dashboards in Einstein Analytics. In this hands-on workshop, you will learn how to apply user-centric design principles to design beautiful, intelligent experiences that users will love.',
        docsURL: '',
        launchURL: launcher + 'https://github.com/ttse-sfdc/sfdx-ea-df19workshop'
    },
    {
        name: 'DF19 Workshop | Get Started with Predictive Analytics Using Einstein Discovery',
        shortname: 'sfdx-ea-df19workshop-discovery',
        description:
            "Learn how to predict the future using Einstein Discovery. In this hands-on workshop, you'll learn how to use the powerful predictive tools in Einstein Analytics Plus to build adaptive machine learning models that predict the key outcomes that drive your business. You'll walk through how to prepare the analysis, how to communicate with the machine to validate what it has learned, and how to assess and interpret the quality of the model you have built. Bring your computer: you'll leave with an understanding of how predictions can be applied to your business problems.",
        docsURL: '',
        launchURL: launcher + 'https://github.com/ttse-sfdc/sfdx-ea-df19workshop-discovery'
    },
    {
        name: 'DF19 Workshop | Templates',
        shortname: 'sfdx-ea-df19workshop-template',
        description:
            "Learn how to predict the future using Einstein Discovery. In this hands-on workshop, you'll learn how to use the powerful predictive tools in Einstein Analytics Plus to build adaptive machine learning models that predict the key outcomes that drive your business. You'll walk through how to prepare the analysis, how to communicate with the machine to validate what it has learned, and how to assess and interpret the quality of the model you have built. Bring your computer: you'll leave with an understanding of how predictions can be applied to your business problems.",
        docsURL: '',
        launchURL: launcher + 'https://github.com/ttse-sfdc/sfdx-ea-df19workshop'
    }
];

export { workshops };
