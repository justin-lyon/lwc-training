import { NavigationMixin, CurrentPageReference } from 'lightning/navigation'
import { LightningElement, api, track, wire } from 'lwc'
import getLimittedAccounts from '@salesforce/apex/HomeAccountAuraService.getLimittedAccounts'
import { fireEvent } from 'c/pubsub'

export default class HomeAccountApp extends NavigationMixin(LightningElement) {
  @wire(CurrentPageReference) pageref
  @api limitter
  @api accounts
  @track error

  @wire(getLimittedAccounts, { limitter: '$limitter' })
  handleWiredAccounts({ error, data }) {
    if(data) {
      this.accounts = data

      if(data.length > 0) {
        this.fireSelectedAccount(data[0].Id)
      }
    }
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

  selectAccount(event) {
    this.fireSelectedAccount(event.detail)
  }

  fireSelectedAccount(accountId) {
    fireEvent(this.pageref, 'selectaccount', accountId)
  }
}