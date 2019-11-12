import { pages } from './pageDefs';
import { PageDef } from '../../../typeDefs';

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

    return output;
};

export { resolve };
