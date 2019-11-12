import { LightningElement, api } from 'lwc';
import { Footer } from '../../../typeDefs';

export default class Wiab extends LightningElement {
    @api details: Footer;
    @api hideFooter = false;
}
