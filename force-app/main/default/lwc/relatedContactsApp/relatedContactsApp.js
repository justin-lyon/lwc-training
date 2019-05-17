import { LightningElement, api, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/RelatedContactsAuraService.getContactsByAccount'

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
}