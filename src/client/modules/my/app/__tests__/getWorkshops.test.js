import { getWorkshops, convertToInternal } from '../getWorkshops';
import { pages } from '../pageDefs';
import { workshops } from '../workshopDefinitions';

describe('tests routing matches', () => {
    it('no path, no hash', () => {
        const output = getWorkshops();
        expect(output).toHaveLength(pages.all.length);
    });

    it('/', () => {
        const output = getWorkshops('/');
        expect(output).toHaveLength(pages.all.length);
    });

    it('/#', () => {
        const output = getWorkshops('/', '#');
        expect(output).toHaveLength(pages.all.length);
    });

    it('/all', () => {
        const output = getWorkshops('/all');
        expect(output).toHaveLength(pages.all.length);
    });

    it('#all', () => {
        const output = getWorkshops('', '#all');
        expect(output).toHaveLength(pages.all.length);
        output.forEach(item => {
            expect(item.docsURL).toBeTruthy();
            expect(item.name).toBeTruthy();
            expect(item.description).toBeTruthy();
        });
    });
    it('#all [null variant]', () => {
        const output = getWorkshops(null, '#all');
        expect(output).toHaveLength(pages.all.length);
    });
    it('/#all', () => {
        const output = getWorkshops('/', '#all');
        expect(output).toHaveLength(pages.all.length);
    });
    it('/demos', () => {
        const output = getWorkshops('/demos');
        expect(output).toHaveLength(pages.demos.length);
    });
    it('demos', () => {
        const output = getWorkshops('demos');
        expect(output).toHaveLength(pages.demos.length);
    });
    it('#demos', () => {
        const output = getWorkshops('', '#demos');
        expect(output).toHaveLength(pages.demos.length);
    });
    it('/#demos', () => {
        const output = getWorkshops('/', '#demos');
        expect(output).toHaveLength(pages.demos.length);
    });
    it('/badpath', () => {
        const output = getWorkshops('/badpath');
        expect(output).toHaveLength(pages.all.length);
    });
    it('#badhash', () => {
        const output = getWorkshops('', '#badhash');
        expect(output).toHaveLength(pages.all.length);
    });
    it('/#badhash', () => {
        const output = getWorkshops('/', '#badhash');
        expect(output).toHaveLength(pages.all.length);
    });

    it('/pathWith#someHash', () => {
        const output = getWorkshops('/pathWith', '#someHash');
        expect(output).toHaveLength(pages.all.length);
    });

    it('/crapPath#demos', () => {
        const output = getWorkshops('/crapPath', '#demos');
        expect(output).toHaveLength(pages.demos.length);
    });

    it('/#internal', () => {
        const output = getWorkshops('/', '#internal');
        expect(output).toHaveLength(pages.all.length);
        output.forEach(element => {
            expect(element.docsURL).toBeTruthy();
            if (element.internalDocsURL) {
                expect(element.docsURL).toBe(element.internalDocsURL);
            }
        });
    });

    it('/#demosinternal', () => {
        const output = getWorkshops('/', '#demosinternal');
        expect(output).toHaveLength(pages.demos.length);
    });

    it('checks the internal docs conversion', () => {
        const inputs = workshops.filter(item => item.internalDocsURL);
        expect(inputs.length).toBeGreaterThan(0);
        const results = convertToInternal(inputs);

        expect(results.length).toBe(inputs.length);
        results.forEach((element, key) => {
            expect(element.docsURL).toBe(element.internalDocsURL);
            expect(element.docsURL).toBe(inputs[key].internalDocsURL);
        });
    });
});
