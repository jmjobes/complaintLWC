import { LightningElement, api, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ClaimUpload extends LightningElement {
    @api recordId;
    @track uploadedFileNames;
    @api showTable = false;
    @api valueUploadedFileNames;
    @track uploadedFileOne;
    @track uploadedFileTwo;

    get acceptedFormats() {
        return ['.pdf', '.png','.jpg','.jpeg'];
    }
    
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        this.uploadedFileOne = uploadedFiles[0].name;
        this.uploadedFileTwo = uploadedFiles[1].name;
        let uploadedFileNames = '';
        for(let i = 0; i < uploadedFiles.length; i++) {
            uploadedFileNames += uploadedFiles[i].name + ', ';
        }
        this.valueUploadedFileNames = uploadedFileNames;
        this.showTable = true;
        //console.log('Uploaded file list: ', uploadedFiles);
    }

    handleUploadFinishedTwo(event) {
        const uploadedFiles = event.detail.files;
        this.uploadedFileOne = uploadedFiles[0]?.name || '';
        this.uploadedFileTwo = uploadedFiles[1]?.name || '';
        let uploadedFileNames = '';
        const updatedData = [];
        for (let i = 0; i < uploadedFiles.length; i++) {
            const file = uploadedFiles[i];
            uploadedFileNames += file.name + ', ';
            updatedData.push({
                fileNumber: (i + 1).toString(),
                fileName: file.name
            });
        }
        this.valueUploadedFileNames = uploadedFileNames;
        this.data = updatedData;
        this.showTable = true;
    }

    columns = [
        { label: 'File Number', fieldName: 'fileNumber' },
        { label: 'File Name', fieldName: 'fileName' }
    ];
  /*
    data = [
        {
            fileNumber: '1',
            fileName: 'TestUploadPDF.pdf'
        },
        {
            fileNumber: '2',
            fileName: 'TestUploadPNG.png'
        }
    ];
    */
    updateParentValuesNext(event) {
        const eve = new CustomEvent('claimuploadnext',{
        detail: {
            'valueUploadedFileNames':this.valueUploadedFileNames,
            'showTable':this.showTable
            }
        })
        this.dispatchEvent(eve);
    }

    updateParentValuesBack(event) {
        const eve = new CustomEvent('claimuploadback',{
        detail: {
            'valueUploadedFileNames':this.valueUploadedFileNames,
            'showTable':this.showTable
            }
        })
        this.dispatchEvent(eve);
    }

}