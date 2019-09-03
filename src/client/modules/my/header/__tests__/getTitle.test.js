import { getTitle, standardHeader } from '../getTitle';
import { adoptionHeaders } from '../../app/pageDefs';

describe('tests routing matches', () => {
    it('no path, no hash', () => {
        const output = getTitle();
        expect(output).toEqual(standardHeader);
    });

    it('/', () => {
        const output = getTitle({ pathname: '/' });
        expect(output).toEqual(standardHeader);
    });

    it('/#', () => {
        const output = getTitle({ hash: '#' });
        expect(output).toEqual(standardHeader);
    });

    it('/all', () => {
        const output = getTitle({ pathname: '/all' });
        expect(output).toEqual(standardHeader);
    });

    it('#all', () => {
        const output = getTitle({ hash: '#all' });
        expect(output).toEqual(standardHeader);
    });

    it('/#all', () => {
        const output = getTitle({ hash: '#all', pathname: '/#all' });
        expect(output).toEqual(standardHeader);
    });

    it('#adoption', () => {
        const output = getTitle({ hash: '#adoption' });
        expect(output).toEqual(adoptionHeaders);
    });

    it('/adoption', () => {
        const output = getTitle({ pathname: '/adoption' });
        expect(output).toEqual(adoptionHeaders);
    });

    it('adoption', () => {
        const output = getTitle({ pathname: 'adoption' });
        expect(output).toEqual(adoptionHeaders);
    });

    it('/#adoption', () => {
        const output = getTitle({ pathname: '/#adoption', hash: '#adoption' });
        expect(output).toEqual(adoptionHeaders);
    });
});
