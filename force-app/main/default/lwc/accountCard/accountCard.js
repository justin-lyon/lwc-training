import { LightningElement, api } from 'lwc';

export default class AccountCard extends LightningElement {
  @api account

  clickAccount() {
    const selectEvent = new CustomEvent('accountclick', {
      bubbles: true,
      detail: this.account.Id
    })
    this.dispatchEvent(selectEvent)
  }
}