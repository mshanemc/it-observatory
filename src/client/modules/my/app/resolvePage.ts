import { pages } from './pageDefs';
import { PageDef, Footer, Header } from '../../../typeDefs';

const footerDefaults = {
    buttonVariant: 'neutral',
    buttonLabel: 'Learn More'
};
const iconDefault = '/resources/images/platform_logo.png';

const defaultFooter: Footer = {
    ...footerDefaults,
    title: 'Run your own Lightning Platform workshops!',
    body1: 'Want to help others build apps fast and easy with the Lightning Platform?',
    body2: 'Find out how the Lightning Platform Workshop-in-a-Box can give you everything you need!',
    buttonUrl: 'https://www.salesforce.com/campaign/lightning-platform-workshop-in-a-box/'
};

const defaultHeader: Header = {
    title: 'Salesforce Platform Workshops',
    subhead: "Now Building Apps is Everyone's Business",
    logoUrl: iconDefault
};

const resolve = (path: string = window.location.pathname, hash: string = window.location.hash) => {
    let internal = false;

    // check for path with no hash; convert to hash.  If there is a hash (preferred), we'll use that and ignore the path
    if (path && path !== '/' && (hash === '#' || !hash)) {
        // there is a path
        path = path.replace('/', '');
        hash = `#${path}`;
    }

    //serve all on the default path
    if ((path === '/' || !path) && (hash === '#' || !hash)) {
        hash = 'all';
    } else {
        hash = hash.replace('#', '');
    }

    // special handling for internal docs
    if (hash.includes('internal')) {
        internal = true;
        hash = hash.replace('internal', '');
    }

    // For any undefined path, just return the contents of All
    if (!pages[hash]) {
        console.log(`not found: ${hash}.  Returning 'all'`);
        hash = 'all';
    }

    const output: PageDef = pages[hash];
    output.useInternal = internal;

    // no footer, but not hiding it
    if (!output.footer && !output.hideFooter) {
        output.footer = defaultFooter;
    } else if (output.footer) {
        // partial footer overrides
        output.footer = { ...footerDefaults, ...output.footer };
    } //otherwise, it's hidden and will stay empty

    if (!output.header) {
        output.header = defaultHeader;
    } else {
        output.header = { logoUrl: iconDefault, ...output.header };
    }

    return output;
};

export { resolve };
