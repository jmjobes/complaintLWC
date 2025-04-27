import { LightningElement, track, api} from 'lwc';

export default class ClaimMaster extends LightningElement {
    @track showCMP1 = true;
    @track showCMP2 = false;
    @track showCMP3 = false;
    @track showCMP4 = false;
    @track showCMP5 = false;

    @api recordId;
    @track currentStep;

    goBackToStepOne() {
        this.currentStep = '1';
        this.showCMP1 = true;
        this.showCMP2 = false;
        this.showCMP3 = false;
        this.showCMP4 = false;
        this.showCMP5 = false;
        this.template.querySelector('div.stepTwo').classList.add('slds-hide');
        this.template
            .querySelector('div.stepOne')
            .classList.remove('slds-hide');
    }

    goToStepTwo() {
        this.currentStep = '2';
        this.showCMP1 = false;
        this.showCMP2 = true;
        this.showCMP3 = false;
        this.showCMP4 = false;
        this.showCMP5 = false;
        this.template.querySelector('div.stepOne').classList.add('slds-hide');
        this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');
    }

    goBackToStepTwo() {
        this.currentStep = '2';
        this.showCMP1 = false;
        this.showCMP2 = true;
        this.showCMP3 = false;
        this.showCMP4 = false;
        this.showCMP5 = false;
        this.template.querySelector('div.stepThree').classList.add('slds-hide');
        this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');
    }

    goToStepThree() {
        this.currentStep = '3';
        this.showCMP1 = false;
        this.showCMP2 = false;
        this.showCMP3 = true;
        this.showCMP4 = false;
        this.showCMP5 = false;
        this.template.querySelector('div.stepTwo').classList.add('slds-hide');
        this.template
            .querySelector('div.stepThree')
            .classList.remove('slds-hide');
    }

    goBackToStepThree() {
        this.currentStep = '3';
        this.showCMP1 = false;
        this.showCMP2 = false;
        this.showCMP3 = true;
        this.showCMP4 = false;
        this.showCMP5 = false;
        this.template.querySelector('div.stepFour').classList.add('slds-hide');
        this.template
            .querySelector('div.stepThree')
            .classList.remove('slds-hide');
    }

    goToStepFour() {
        this.currentStep = '4';
        this.showCMP1 = false;
        this.showCMP2 = false;
        this.showCMP3 = false;
        this.showCMP4 = true;
        this.showCMP5 = false;
        this.template.querySelector('div.stepThree').classList.add('slds-hide');
        this.template
            .querySelector('div.stepFour')
            .classList.remove('slds-hide');
    }

       handleSubmit(){
        this.currentStep = '5';
        this.showCMP1 = false;
        this.showCMP2 = false;
        this.showCMP3 = false;
        this.showCMP4 = false;
        this.showCMP5 = true;
        this.template.querySelector('div.stepFour').classList.add('slds-hide');
        this.template
            .querySelector('div.stepFive')
            .classList.remove('slds-hide');
      }

      @api parentRadioValue;
      @api parentFirstName = 'Bob';
      @api parentLastName = 'Miller';
      @api parentEmail = 'bobmiller@gmail.com';
      @api parentPhone = '(222) 333-4444';
      @api parentClaimType;
      @api parentDependent;
      @api parentFileNames;
      @api parentShowTable;

      handleClaimInfoNext(event) {
        this.parentRadioValue=event.detail.childRadioValue;
        this.parentFirstName=event.detail.childFirstName;
        this.parentLastName=event.detail.childLastName;
        this.parentEmail=event.detail.childEmail;
        this.parentPhone=event.detail.childPhone;
        this.parentClaimType=event.detail.valueClaimType;
        this.parentDependent=event.detail.valueDependent;
        this.goToStepThree();
      }

      handleClaimInfoBack(event) {
        this.parentRadioValue=event.detail.childRadioValue;
        this.parentFirstName=event.detail.childFirstName;
        this.parentLastName=event.detail.childLastName;
        this.parentEmail=event.detail.childEmail;
        this.parentPhone=event.detail.childPhone;
        this.parentClaimType=event.detail.valueClaimType;
        this.parentDependent=event.detail.valueDependent;
        this.goBackToStepOne();
      }

      handleClaimUploadNext(event) {
        this.parentFileNames=event.detail.valueUploadedFileNames;
        this.parentShowTable=event.detail.showTable;
        this.goToStepFour();
      }

      handleClaimUploadBack(event){
        this.parentFileNames=event.detail.valueUploadedFileNames;
        this.parentShowTable=event.detail.showTable;
        this.goBackToStepTwo();
      }

}