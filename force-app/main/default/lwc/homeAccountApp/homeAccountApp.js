import { NavigationMixin } from 'lightning/navigation'
import { LightningElement, api, track, wire } from 'lwc'
import getLimittedAccounts from '@salesforce/apex/HomeAccountAuraService.getLimittedAccounts'

export default class HomeAccountApp extends NavigationMixin(LightningElement) {
  @api limitter
  @api accounts
  @track error

  @wire(getLimittedAccounts, { limitter: '$limitter' })
  handleWiredAccounts({ error, data }) {
    this.accounts = data
    this.error = error
  }

  gotoAccount(event) {
    event.stopPropagation()
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: event.detail,
        objectApiName: 'Account',
        actionName: 'view'
      }
    })
  }
}