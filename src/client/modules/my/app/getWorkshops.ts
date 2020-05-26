/* eslint-disable no-console */
import { PageDef } from '../../../typeDefs';

const bundlesURL = 'https://cdo-demo-main-159a7094ef6-15ab9e95e81.secure.force.com/pools/services/apexrest/bundles';

const getWorkshops = async (page: PageDef): Promise<PageDef> => {
    const response = await fetch(bundlesURL);
    const bundles = await response.json();

    const matchedBundle =
        bundles.find(
            bundle => bundle.Launcher_App_Path__c === page.path && bundle.Bundle_Members__r.records // matches page // and has some records
        ) ||
        bundles.find(
            bundle => bundle.Launcher_App_Path__c === 'all' // fall back to the "all" bundle
        );

    return {
        ...page,
        redirect: matchedBundle.Redirect__c,
        header: {
            title: matchedBundle.Launcher_Title__c || page.header.title,
            subhead: matchedBundle.Launcher_Subhead__c || page.header.subhead,
            logoUrl: matchedBundle.Launcher_Logo_Url__c || page.header.logoUrl
        },
        footer: matchedBundle.Footer_Title__c
            ? {
                  ...page.footer,
                  title: matchedBundle.Footer_Title__c,
                  body1: matchedBundle.Footer_Body_1__c,
                  body2: matchedBundle.Footer_Body_2__c,
                  buttonUrl: matchedBundle.Footer_Button_Url__c
              }
            : page.footer,
        deployables: matchedBundle.Bundle_Members__r.records
            .map(bm => bm.Demo__r)
            .map(demo => ({
                name: demo.Name,
                shortname: demo.Id,
                description: demo.Description__c,
                launchURL: demo.Scratch_Org_Deploy__c,
                docsURL: page.useInternal ? demo.Guide_Internal__c || demo.Guide__c : demo.Guide__c
            }))
    };
};

export { getWorkshops };
