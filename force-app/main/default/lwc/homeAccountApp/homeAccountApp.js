import { LightningElement, api, track, wire } from 'lwc'
import getLimittedAccounts from '@salesforce/apex/HomeAccountAuraService.getLimittedAccounts'

export default class HomeAccountApp extends LightningElement {
  @api limitter
  @api accounts
  @track error

  @wire(getLimittedAccounts, { limitter: '$limitter' })
  handleWiredAccounts({ error, data }) {
    this.accounts = data
    this.error = error
  }
}