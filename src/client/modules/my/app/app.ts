import { LightningElement } from 'lwc';
import { getWorkshops } from './getWorkshops';
import { resolve } from './resolvePage';
import { PageDef } from '../../../typeDefs';

export default class App extends LightningElement {
    _pageActual: PageDef = {
        deployables: []
    };

    get page() {
        return this._pageActual;
    }

    get tiles() {
        return this._pageActual.deployables;
    }

    async connectedCallback() {
        try {
            const pageActual = await getWorkshops(resolve(window.location.pathname, window.location.hash));
            console.log(pageActual);
            if (pageActual.redirect) {
                // eslint-disable-next-line require-atomic-updates
                window.location.href = pageActual.redirect;
            } else {
                this._pageActual = pageActual;
            }
        } catch (error) {
            console.error('error retrieving page');
            console.error(error);
        }
    }
}
