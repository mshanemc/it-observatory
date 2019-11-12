import { LightningElement, track } from 'lwc';
import { getWorkshops } from './getWorkshops';
import { resolve } from './resolvePage';

export default class App extends LightningElement {
    get page() {
        return resolve(window.location.pathname, window.location.hash);
    }

    get tiles() {
        return getWorkshops(this.page);
    }
}
