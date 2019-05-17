import { LightningElement, api } from 'lwc';

export default class AccountCard extends LightningElement {
  @api account

  gotoAccount() {
    this.dispatchClick('navaccount', this.account.Id)
  }

  selectAccount() {
    this.dispatchClick('selectaccount', this.account.Id)
  }

  dispatchClick(name, id) {
    const event = new CustomEvent(name.toLowerCase(), {
      bubbles: true,
      detail: id
    })
    this.dispatchEvent(event)
  }
}