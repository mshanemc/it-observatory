/* eslint-disable no-console */
import { pages } from './pageDefs';
import { workshops } from './workshopDefinitions';

const convertToInternal = input => {
    return input.map(workshop => {
        if (workshop.internalDocsURL) {
            workshop.docsURL = workshop.internalDocsURL;
        }
        return workshop;
    });
};

const getWorkshops = (path = '', hash = '') => {
    let output = [];
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

    pages[hash].forEach(name => {
        output.push(workshops.find(workshop => workshop.shortname === name));
        if (internal) {
            output = convertToInternal(output);
        }
    });
    return output;
};

export { getWorkshops, convertToInternal };
