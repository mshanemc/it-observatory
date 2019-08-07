/* eslint-disable no-console */
import * as fetch from 'node-fetch';

import { workshops, launcher, launcher_pre } from '../workshopDefinitions';

const fixURL = fullUrl => {
    return fullUrl
        .replace(launcher_pre, '')
        .replace(launcher, '')
        .replace('&email=required', '');
};

describe('check all the urls', () => {
    jest.setTimeout(10000);

    const workshopsWithURLs = workshops.filter(workshop => workshop.launchURL);

    let organizedResults = [];

    beforeAll(async () => {
        const fetchResults = await Promise.all(workshopsWithURLs.map(workshop => fetch(fixURL(workshop.launchURL))));
        fetchResults.forEach((result, index) => {
            organizedResults.push({
                url: workshopsWithURLs[index].launchURL,
                status: result.status
            });
        });
    });

    test('all urls were present', () => {
        expect(organizedResults.length).toBe(workshopsWithURLs.length);
        expect(organizedResults.length).toBeGreaterThan(0);

        organizedResults.forEach((result, index) => {
            expect(result).toEqual({
                url: workshopsWithURLs[index].launchURL,
                status: 200
            });
        });
    });
});
