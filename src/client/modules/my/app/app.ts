import { LightningElement, track } from 'lwc';
import { getWorkshops } from './getWorkshops';

export default class App extends LightningElement {
    @track pathname = window.location.pathname;
    @track hash = window.location.hash;

    get tiles() {
        return getWorkshops(this.pathname, this.hash);
    }
}
