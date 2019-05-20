import { NavigationMixin, CurrentPageReference } from 'lightning/navigation'
import { getRecord } from 'lightning/uiRecordApi'
import { LightningElement, api, track, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/RelatedContactsAuraService.getContactsByAccount'
import { registerListener, unregisterListener } from 'c/pubsub'

const FIELDS = [
  'Account.Id',
  'Account.Name',
]
export default class RelatedContactsApp extends NavigationMixin(LightningElement) {
  @track accountId
  @api account
  @api contacts
  @api error

  @wire(getRecord, { recordId: '$accountId', fields: FIELDS })
  handleGetAccount({error, data}) {
    if(data) {
      this.account = {
        Name: data.fields.Name.value,
        Id: data.fields.Id.value
      }
      return
    }
    this.account = {}
    this.error = error
  }

  @wire(getContactsByAccount, { accountId: '$accountId' })
  handleGetContacts({error, data}) {
    if(data) {
      this.contacts = data
      return
    }
    this.error = error
  }

  @wire(CurrentPageReference) pageRef

  connectedCallback() {
    registerListener('selectaccount', this.setAccountId, this)
  }

  disconnectedCallback() {
    unregisterListener('selectaccount', this.setAccountId, this)
  }

  setAccountId(accountId) {
    this.accountId = accountId
  }

  gotoContact(event) {
    event.stopPropagation()
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: event.detail,
        objectApiName: 'Contact',
        actionName: 'view'
      }
    })
  }
}