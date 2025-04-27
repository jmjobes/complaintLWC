import { LightningElement, api } from 'lwc';

export default class ClaimReviewSubmit extends LightningElement {

    @api childRadioValue;
    @api childFirstName;
    @api childLastName;
    @api childEmail;
    @api childPhone;
    @api valueClaimType;
    @api valueDependent;
    isDisabled = true;
    @api valueUploadedFileNames;

    get YesNo() {
        return [
            { label: 'Yes - info is correct', value: 'Yes' },
            { label: 'No - enter new contact info', value: 'No' },
            ];
        }
    
        get Dependent() {
        return [
            { label: 'Lily Miller', value: 'Lily Miller' },
            { label: 'Olivia Miller', value: 'Olivia Miller' },
            { label: 'Nelson Miller', value: 'Nelson Miller' },
            ];
        }
        
        get ClaimType() {
        return [
            { label: 'Personal Injury', value: 'Personal Injury' },
            { label: 'Property Damage', value: 'Property Damage' },
            { label: 'Other Claim', value: 'Other Claim' },
            ];
        }

}