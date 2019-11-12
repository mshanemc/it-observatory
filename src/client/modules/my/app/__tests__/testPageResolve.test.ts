// import { getWorkshops } from '../getWorkshops';
import { resolve } from '../resolvePage';
import { pages } from '../pageDefs';

describe('tests routing matches', () => {
    it('returns all for /', () => {
        const output = resolve('/');
        expect(output).toEqual(pages.all);
    });

    it('returns all for /#', () => {
        const output = resolve('/', '#');
        expect(output).toEqual(pages.all);
    });

    it('/all', () => {
        const output = resolve('/', '#');
        expect(output).toEqual(pages.all);
    });

    it('#all', () => {
        const output = resolve('/', '#');
        expect(output).toEqual(pages.all);
    });

    it('#all [null variant]', () => {
        const output = resolve(null, '#all');
        expect(output).toEqual(pages.all);
    });

    it('/#all', () => {
        const output = resolve(null, '#all');
        expect(output).toEqual(pages.all);
    });

    it('/demos', () => {
        const output = resolve('/demos');
        expect(output).toEqual(pages.demos);
    });
    it('demos', () => {
        const output = resolve('demos');
        expect(output).toEqual(pages.demos);
    });
    it('#demos', () => {
        const output = resolve('', '#demos');
        expect(output).toEqual(pages.demos);
    });
    it('/#demos', () => {
        const output = resolve('/', '#demos');
        expect(output).toEqual(pages.demos);
    });

    it('/badpath', () => {
        const output = resolve('/badpath');
        expect(output).toEqual(pages.all);
    });
    it('#badhash', () => {
        const output = resolve('', '#badhash');
        expect(output).toEqual(pages.all);
    });
    it('/#badhash', () => {
        const output = resolve('/', '#badhash');
        expect(output).toEqual(pages.all);
    });

    it('/pathWith#someHash', () => {
        const output = resolve('/pathWith', '#someHash');
        expect(output).toEqual(pages.all);
    });

    it('/crapPath#demos', () => {
        const output = resolve('/crapPath', '#demos');
        expect(output).toEqual(pages.demos);
    });

    it('/#internal', () => {
        const output = resolve('/', '#internal');
        expect(output.deployables).toEqual(pages.all.deployables);
        expect(output.useInternal).toBe(true);
    });

    it('/#demosinternal', () => {
        const output = resolve('/', '#demosinternal');
        expect(output.deployables).toEqual(pages.demos.deployables);
        expect(output.useInternal).toBe(true);
    });
});
