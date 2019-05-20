import { CurrentPageReference } from 'lightning/navigation'
import { LightningElement, api, track, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/RelatedContactsAuraService.getContactsByAccount'
import { registerListener, unregisterListener } from 'c/pubsub'

export default class RelatedContactsApp extends LightningElement {
  @track accountId
  @api contacts
  @api error

  @wire(getContactsByAccount, { accountId: '$accountId' })
  handleGetContacts({error, data}) {
    if(data) {
      this.contacts = data
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
}