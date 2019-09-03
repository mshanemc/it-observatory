import { titleOverrides } from '../app/pageDefs';

const standardHeader = {
    title: 'Salesforce Platform Workshops',
    subhead: "Now Building Apps is Everyone's Business"
};

const getTitle = location => {
    if (!location) {
        return standardHeader;
    }

    if (location.hash) {
        const hash = location.hash.replace('#', '').replace('internal', '');

        if (titleOverrides[hash]) {
            return titleOverrides[hash];
        }
    }

    if (location.pathname) {
        const pathname = location.pathname.replace('internal', '').replace('/', '');

        if (titleOverrides[pathname]) {
            return titleOverrides[pathname];
        }
    }

    return standardHeader;
};

export { getTitle, standardHeader };
