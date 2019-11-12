import { getWorkshops } from '../getWorkshops';
import { pages } from '../pageDefs';
import { workshops } from '../workshopDefinitions';
import { PageDef } from '../../../../typeDefs';

describe('tests getWorkshops', () => {
    it('tests method using all', () => {
        const output = getWorkshops(pages.all);
        expect(output).toHaveLength(pages.all.deployables.length);
    });

    it('checks the internal docs conversion', () => {
        const pageDef: PageDef = { ...pages.all, useInternal: true };

        const output = getWorkshops(pageDef);

        output.forEach((deployable, key) => {
            if (deployable.internalDocsURL) {
                expect(deployable.docsURL).toBe(deployable.internalDocsURL);
            }
        });
    });
});
