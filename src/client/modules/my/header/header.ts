import { LightningElement, api } from 'lwc';
import { getTitle } from './getTitle';

export default class Header extends LightningElement {
    @api title;
    @api subhead;

    connectedCallback() {
        const titleResult = getTitle(window.location);

        this.title = this.title || titleResult.title;
        this.subhead = this.subhead || titleResult.subhead;
    }
}
