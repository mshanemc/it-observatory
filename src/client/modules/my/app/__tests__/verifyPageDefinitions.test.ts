import { pages } from '../pageDefs';
import { workshops } from '../workshopDefinitions';

describe('checks pageDefs', () => {
    for (const page in pages) {
        if ({}.hasOwnProperty.call(pages, page)) {
            it(`verifies that workshops for ${page} exist`, () => {
                for (const shortname of pages[page]) {
                    const found = workshops.some(workshop => {
                        return workshop.shortname === shortname;
                    });
                    expect(found).toBe(true);
                }
            });
        }
    }
});
