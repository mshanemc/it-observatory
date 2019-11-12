import { LightningElement, api } from 'lwc';
import { Header } from '../../../typeDefs';

export default class PageHeader extends LightningElement {
    @api page;

    defaultHeader: Header = {
        title: 'Salesforce Platform Workshops',
        subhead: "Now Building Apps is Everyone's Business",
        logoUrl: '/resources/images/platform_logo.png'
    };

    get title() {
        return this.page.header ? this.page.header.title : this.defaultHeader.title;
    }

    get subhead() {
        return this.page.header ? this.page.header.subhead : this.defaultHeader.subhead;
    }

    get logoUrl() {
        return this.page.header.logoUrl || this.defaultHeader.logoUrl;
    }
}
