import { pages } from '../pageDefs';
import { workshops } from '../workshopDefinitions';

describe('checks that all pages and each tile actually exists', () => {
    for (const key of Object.keys(pages)) {
        // for each item in that page
        it(`validates pages for ${key}`, () => {
            pages[key].forEach(shortname => {
                expect(workshops).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            shortname
                        })
                    ])
                );
            });
        });
    }
});
