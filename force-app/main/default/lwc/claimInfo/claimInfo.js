import { LightningElement, track, api } from 'lwc';

export default class ClaimInfo extends LightningElement {


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

    @track isDisabled = true;
    @api childRadioValue;
    @api childFirstName = 'Bob';
    @api childLastName = 'Miller';
    @api childEmail = 'bobmiller@gmail.com';
    @api childPhone = '(222) 333-4444';
    @api valueClaimType;
    @api valueDependent;

    handleRadioChange(event) {
    this.selectedValue = event.detail.value;
    if (this.selectedValue === 'Yes') {
        this.isDisabled = true;
    } else if (this.selectedValue === 'No') {
        this.isDisabled = false;
    }
    else {
        this.isDisabled = true;
    }
    this.childRadioValue = event.target.value;
    }

    connectedCallback() {
        // This method is called when the component is inserted into the DOM
        if (this.childRadioValue === 'Yes') {
            this.isDisabled = true;
        } else if (this.childRadioValue === 'No') {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
    }

    handleFirstNameChange(event) {
        this.childFirstName = event.target.value;   
    }

    handleLastNameChange(event) {
        this.childLastName = event.target.value;   
    }

    handleEmailChange(event) {
        this.childEmail = event.target.value;   
    }

    handlePhoneChange(event) {
        this.childPhone = event.target.value;
    }

    handleClaimChange(event) {
        this.valueClaimType = event.target.value;
    }

    handleDependentChange(event) {
        this.valueDependent = event.target.value;
    }

    updateParentValuesNext(event) {
        const eve = new CustomEvent('claiminfonext',{
        detail: {
            'childRadioValue':this.childRadioValue,
            'childFirstName':this.childFirstName,
            'childLastName':this.childLastName,
            'childEmail':this.childEmail,
            'childPhone':this.childPhone,
            'valueClaimType':this.valueClaimType,
            'valueDependent':this.valueDependent
            }
        })
        this.dispatchEvent(eve);
    }

    updateParentValuesBack(event) {
        const eve = new CustomEvent('claiminfoback',{
        detail: {
            'childRadioValue':this.childRadioValue,
            'childFirstName':this.childFirstName,
            'childLastName':this.childLastName,
            'childEmail':this.childEmail,
            'childPhone':this.childPhone,
            'valueClaimType':this.valueClaimType,
            'valueDependent':this.valueDependent
            }
        })
        this.dispatchEvent(eve);
    }

}