import { LightningElement, api } from 'lwc';

export default class AccountDetail extends LightningElement {
  @api account

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