import { LightningElement, api, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/RelatedContactsAuraService.getContactsByAccount'
import { registerListener, unregisterListener } from 'c/pubsub'

export default class RelatedContactsApp extends LightningElement {
  @api accountId
  @api contacts
  @api error

  @wire(getContactsByAccount, { accountId: '$accountId' })
  handleGetContacts(error, data) {
    if(data) {
      this.contacts = data
      return
    }
    this.error = error
  }

  connectedCallback() {
    registerListener('selectaccount', this.setAccountId, this)
  }

  disconnectedCallback() {
    unregisterListener('selectaccount', this.setAccountId, this)
  }

  setAccountId(accountId) {
    console.log('setting accountid', accountId)
    this.accountId = accountId
  }
}