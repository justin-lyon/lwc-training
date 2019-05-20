import { LightningElement, api } from 'lwc';

export default class GotoRecord extends LightningElement {
  @api name
  @api recordId

  gotoRecord() {
    console.log(this.name, this.recordId)
    const event = new CustomEvent(this.name.toLowerCase(), {
      bubbles: true,
      detail: this.recordId
    })
    this.dispatchEvent(event)
  }
}