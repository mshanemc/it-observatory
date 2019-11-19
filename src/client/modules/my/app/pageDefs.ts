import { Header, PageDef, Footer } from '../../../typeDefs';

// reusable header/subhead/logo objects
const adoptionHeaders: Header = {
    title: 'Lightning Adoption Workshops',
    subhead: `It's Better in Lightning`
};

const lexHeaders: Header = {
    title: 'Lightning Experience Workshops',
    subhead: 'Activate Lightning Experience',
    logoUrl: '/resources/lwc.png'
};

// reusable footer stuff
const adoptionFooter: Footer = {
    title: 'Run your own Lightning workshops!',
    body1: 'Want to help others do more with Lightning Experience?',
    body2: 'Find out how the Lightning Workshop-in-a-Box can give you everything you need!',
    buttonUrl: 'https://www.salesforce.com/campaign/lightning-adoption-workshop-in-a-box/'
};

// pages
const pages: { [name: string]: PageDef } = {
    df19lex: {
        header: lexHeaders,
        deployables: [
            'adoption_sales',
            'adoption_service',
            'flows_simple',
            'console_apps',
            'user_engagement',
            'js_buttons',
            'lex_now_what',
            'empower_flow',
            'new_mobile_app2'
        ],
        footer: adoptionFooter
    },
    df19meadow: {
        deployables: ['flows', 'crash_course', 'automate', 'agility']
    },
    df19park: {
        deployables: [
            'cdc',
            'code_for_clicks',
            'lwc',
            'heroku_connect_TH',
            'epb_nba',
            'nba',
            'new_mobile_app',
            'vision_language',
            'einstein_discovery'
        ]
    },
    tdx19dev: {
        deployables: ['heroku_connect', 'code_for_clicks', 'heroku_pipelines', 'lightning_vf', 'cdc', 'lwc']
    },
    tdx19admin: {
        deployables: ['automate', 'crash_course', 'agility', 'flows', 'epb']
    },
    tdx19adoption: {
        header: adoptionHeaders,
        deployables: ['flows_simple', 'go_live', 'js_buttons', 'console_apps']
    },

    all: {
        deployables: [
            'automate',
            'cdc',
            'lwc',
            'epb',
            'flows',
            'heroku_connect',
            'lightning_features',
            'code_for_clicks',
            'crash_course',
            'agility',
            'adoption_sales',
            'adoption_service',
            'go_live',
            'quick_actions',
            'lightning_vf',
            'reporting',
            'js_buttons',
            'heroku_pipelines',
            'console_apps',
            'flows_simple'
        ]
    },
    main: {
        deployables: [
            'automate',
            'cdc',
            'lwc',
            'epb',
            'flows',
            'heroku_connect',
            'lightning_features',
            'code_for_clicks',
            'crash_course',
            'agility',
            'adoption_sales',
            'adoption_service',
            'go_live',
            'quick_actions',
            'lightning_vf',
            'reporting',
            'js_buttons',
            'heroku_pipelines',
            'console_apps',
            'flows_simple'
        ]
    },

    df18zone: {
        deployables: [
            'agility',
            'heroku_connect',
            'code_for_clicks',
            'crash_course',
            // 'lightning_vf',
            'js_buttons',
            'heroku_pipelines'
        ]
    },

    df18rapids: {
        deployables: ['automate', 'agility', 'crash_course', 'reporting']
    },
    df18adoption: {
        header: adoptionHeaders,
        footer: adoptionFooter,
        deployables: ['adoption_sales', 'adoption_service', 'go_live', 'quick_actions']
    },
    sfwt: {
        deployables: [
            'automate',
            'cdc',
            'lwc',
            'epb',
            'flows',
            'heroku_connect',
            'lightning_features',
            'code_for_clicks',
            'crash_course',
            'agility',
            'adoption_sales',
            'adoption_service',
            'go_live',
            'quick_actions',
            'lightning_vf',
            'reporting',
            'js_buttons',
            'heroku_pipelines',
            'console_apps',
            'flows_simple'
        ]
    },

    daydreamin: {
        deployables: ['reporting', 'lightning_features', 'code_for_clicks']
    },
    adoption: {
        header: adoptionHeaders,
        footer: adoptionFooter,

        deployables: [
            'adoption_sales',
            'adoption_service',
            'reporting',
            'go_live',
            'quick_actions',
            'lightning_features',
            // 'lightning_vf',
            'js_buttons'
        ]
    },

    // demo stuff
    demos: {
        deployables: [
            'electron_core_object',
            'demo_custExp',
            'demo_devexp',
            'demo_departmental',
            'demo_employeeengagement',
            'demo_align_heroku',
            'demo_volvo_lea',
            'demo_volvo_low_code',
            'easy_spaces',
            'demo_extend_crm',
            'demo_integrate',
            'demo_ducati_heroku',
            'demo_grocery',
            'demo_encryption',
            'demo_sfdx_mulesoft',
            'demo_volvo_trust',
            'demo_dubsmash'
            // ,
            // 'demo_rviot'
        ]
    },

    fy20plays: {
        deployables: ['demo_employeeengagement', 'demo_custExp', 'demo_departmental', 'demo_devexp']
    },
    df18campground: {
        deployables: [
            'demo_volvo_low_code',
            'demo_volvo_lea',
            'demo_volvo_iot',
            'demo_dubsmash',
            'demo_volvo_trust',
            'demo_align_heroku',
            'demo_sfdx_mulesoft'
        ]
    },

    cpq: {
        deployables: ['cpq'],
        header: {
            title: 'Salesforce CPQ'
        }
    },

    AAHOW: {
        deployables: ['df19AAHOW']
    },
    ADKCodey: {
        deployables: ['ADKCodey']
    },
    brokenWorkshops: {
        deployables: ['iot']
    },
    df19cg: {
        deployables: ['app-wall', 'df19cg1', 'df19cg2', 'df19cg3', 'df19cg6'],
        hideFooter: true
    },

    analytics: {
        deployables: ['sfdx-ea-df19workshop-template', 'sfdx-ea-df19workshop-design', 'sfdx-ea-df19workshop-discovery'],
        header: {
            title: 'Einstein Analytics',
            subhead: 'Hands on with Einstein Analytics',
            logoUrl: '/resources/images/salesforce_einstein_analyitcs_dark.png'
        },
        footer: {
            title: 'Learn more with our Learning Map',
            body1: 'The Learning Map brings together the best of the best content across Trailhead, documentation, videos and technical guides in',
            body2: 'the context of the end-to-end business journey. This one-stop-shop can help any user get started with Einstein Analytics.',
            buttonUrl: 'http://www.einsteinanalyticslearningmap.com/'
        }
    },
    einstein: {
        deployables: ['epbnbascratchorg','nba_only','einstein_discovery'],
        header: {
            title: 'Einstein Workshops',
            logoUrl: '/resources/images/Einstein_rocket.png'
        },
        footer: {
            title: 'Learn more with the Einstein Trail Mix',
            body1: 'The Einstein Trail Mix allows you to get hands-on with all the Einstein tools.',
            buttonUrl: 'http://trailhead.einstein.com/'
        }
    }
};

export { pages };
