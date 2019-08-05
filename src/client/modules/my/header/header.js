import { LightningElement, api } from 'lwc';

const normal = {
    title: 'Salesforce Platform Workshops',
    subhead: "Now Building Apps is Everyone's Business"
};

const adoption = {
    title: 'Lightning Adoption Workshops',
    subhead: "It's better in Lightning"
};

const whichRoute = () => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    // special cases for header changes
    if (pathname.includes('/adoption') || hash.includes('adoption')) {
        return adoption;
    }

    return normal;
};

export default class Header extends LightningElement {
    @api title;
    @api subhead;

    connectedCallback() {
        this.title = this.title || whichRoute().title;
        this.subhead = this.subhead || whichRoute().subhead;
    }
}
