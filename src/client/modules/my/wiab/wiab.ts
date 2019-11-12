import { LightningElement, api } from 'lwc';
import { Footer } from '../../../typeDefs';

export default class Wiab extends LightningElement {
    @api details: Footer;

    defaultFooter: Footer = {
        title: 'Run your own Lightning Platform workshops!',
        body1: 'Want to help others build apps fast and easy with the Lightning Platform?',
        body2: 'Find out how the Lightning Platform Workshop-in-a-Box can give you everything you need!',
        buttonVariant: 'neutral',
        buttonUrl: 'https://www.salesforce.com/campaign/lightning-platform-workshop-in-a-box/',
        buttonLabel: 'Learn More'
    };

    get show() {
        if (this.details && this.details.hide) {
            return false;
        }
        return true;
    }

    get title() {
        return this.details ? this.details.title : this.defaultFooter.title;
    }

    get body1() {
        return this.details ? this.details.body1 : this.defaultFooter.body1;
    }

    get body2() {
        return this.details ? this.details.body2 : this.defaultFooter.body2;
    }

    get buttonVariant() {
        return this.details ? this.details.buttonVariant : this.defaultFooter.buttonVariant;
    }

    get buttonLabel() {
        return this.details.buttonLabel || this.defaultFooter.buttonLabel;
    }

    get buttonUrl() {
        return this.details ? this.details.buttonUrl : this.defaultFooter.buttonUrl;
    }
}
