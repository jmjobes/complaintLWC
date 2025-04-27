import { LightningElement, wire } from 'lwc';
import generateClaimString from '@salesforce/apex/GenerateClaimId.generateClaimString';

export default class ClaimConfirmation extends LightningElement {

    claimId;

    @wire(generateClaimString)
    genClaimId({data, error}) {
        if(data) {
            this.claimId = data
            if (error)
                console.log(error);
        }
    }
}