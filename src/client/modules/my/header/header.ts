import { LightningElement, api } from 'lwc';
import { Header } from '../../../typeDefs';

export default class PageHeader extends LightningElement {
    @api page;
}
