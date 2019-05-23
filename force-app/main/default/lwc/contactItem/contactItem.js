import { LightningElement, api } from 'lwc';

const stockPhoto = 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg'

export default class ContactItem extends LightningElement {
  @api contact

  getAvatar() {
    if (this.contact.PhotoUrl) return this.contact.PhotoUrl

    return stockPhoto
  }

  clickContact() {
    this.dispatchClick('gotoContact', this.contact.Id)
  }

  dispatchClick(name, id) {
    const event = new CustomEvent(name.toLowerCase(), {
      bubbles: true,
      detail: id
    })
    this.dispatchEvent(event)
  }
}