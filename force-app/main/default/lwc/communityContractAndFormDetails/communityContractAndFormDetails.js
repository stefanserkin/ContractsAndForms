import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTRACT_NAME_FIELD from '@salesforce/schema/TREX1__Contract_and_Form__c.Name';
import WAIVER_TEXT_FIELD from '@salesforce/schema/TREX1__Contract_and_Form__c.TREX1__Waiver_Text__c';
import SIGNED_BY_FIELD from '@salesforce/schema/TREX1__Contract_and_Form__c.TREX1__Signed_By_User__r.Name';
import DATE_SIGNED_FIELD from '@salesforce/schema/TREX1__Contract_and_Form__c.TREX1__Date_Signed__c';
import VALID_UNTIL_FIELD from '@salesforce/schema/TREX1__Contract_and_Form__c.TREX1__Valid_Until__c';

const fields = [CONTRACT_NAME_FIELD, WAIVER_TEXT_FIELD, SIGNED_BY_FIELD, DATE_SIGNED_FIELD, VALID_UNTIL_FIELD];

export default class CommunityContractAndFormDetails extends LightningElement {
    @api recordId;

    contractName;
    waiverText;
    signedBy;
    dateSigned;
    validUntil;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: fields
    }) contract({
        error,
        data
    }) {
        if (error) {
            this.error = error; 
        } else if (data) {
            this.contractName = getFieldValue(data, CONTRACT_NAME_FIELD);
            this.waiverText   = getFieldValue(data, WAIVER_TEXT_FIELD);
            this.signedBy     = getFieldValue(data, SIGNED_BY_FIELD);
            this.dateSigned   = getFieldValue(data, DATE_SIGNED_FIELD);
            this.validUntil   = getFieldValue(data, VALID_UNTIL_FIELD);
            console.log(this.signedBy);
        }
    }


}