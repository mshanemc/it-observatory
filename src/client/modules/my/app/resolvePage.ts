import { PageDef, Footer, Header } from '../../../typeDefs';

const footerDefaults = {
    buttonVariant: 'neutral',
    buttonLabel: 'Learn More'
};
const iconDefault = '/resources/images/platform_logo.png';
const currentPlatformBranding = 'Customer 360 Platform';

const defaultHeader: Header = {
    title: `${currentPlatformBranding} Workshops`,
    logoUrl: iconDefault
};

const defaultFooter: Footer = {
    ...footerDefaults,
    title: `Run your own ${currentPlatformBranding} workshops!`,
    body1: `Want to help others build apps fast and easy with the ${currentPlatformBranding}?`,
    body2: `Find out how the ${currentPlatformBranding} Workshop-in-a-Box can give you everything you need!`,
    buttonUrl: 'https://www.salesforce.com/campaign/lightning-platform-workshop-in-a-box/'
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

    const output: PageDef = { path: hash, useInternal: internal, footer: defaultFooter, header: defaultHeader, deployables: [] };

    return output;
};

export { resolve };
