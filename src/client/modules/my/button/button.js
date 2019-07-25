import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api url;
    @api label;
    @api target = '_blank';
    @api variant = 'neutral';

    get className() {
        let output = 'slds-button';
        if (this.variant === 'brand') {
            output = output + ' slds-button_brand';
        } else if (this.variant === 'neutral') {
            output = output + ' slds-button_neutral';
        }
        return output;
    }
}
