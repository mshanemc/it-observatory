/* eslint-disable no-console */
import * as fetch from 'node-fetch';

import { pages } from '../pageDefs';
import { workshops, launcher, launcher_pre } from '../workshopDefinitions';

const fixURL = fullUrl => {
    return fullUrl
        .replace(launcher_pre, '')
        .replace(launcher, '')
        .replace('&email=required', '');
};

const checkURL = async workshop => {
    return fetch(fixURL(workshop.launchURL));
};

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

test('validates that all the github urls exists', async () => {
    const requests = workshops.filter(workshop => workshop.launchURL).map(workshop => checkURL(workshop));

    const responses = await Promise.all(requests);

    responses.forEach(response => {
        if (response.status !== 200) {
            console.error('missing repo');
            console.error('response');
        }
        expect(response.status).toBe(200);
    });
});
