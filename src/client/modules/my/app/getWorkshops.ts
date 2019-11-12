/* eslint-disable no-console */
import { pages } from './pageDefs';
import { workshops } from './workshopDefinitions';
import { PageDef } from '../../../typeDefs';

const getWorkshops = (page: PageDef) => {
    return workshops
        .filter(deployable => page.deployables.includes(deployable.shortname))
        .map(deployable => {
            if (page.useInternal && deployable.docsURL && deployable.internalDocsURL) {
                return { ...deployable, docsURL: deployable.internalDocsURL };
            }
            return deployable;
        });
};

export { getWorkshops };
