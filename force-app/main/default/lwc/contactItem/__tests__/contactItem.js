import { createElement } from 'lwc'
import ContactItem from 'c/contactItem'

const NAME = 'Rick Sanchez'
const EMAIL = 'rick.sanchez@thecouncil.net'
const CONTACT = {
  Name: NAME,
  Email: EMAIL,
  PhotoUrl: undefined
}

describe('c-contact-item', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM.
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild)
    }
  })

  it('has a contact', () => {
    // create element
    const element = createElement('c-contact-item', {
      is: ContactItem
    })
    element.contact = CONTACT
    document.body.appendChild(element)

    // verify contact record
    const span = element.shadowRoot.querySelector('span.clickable')
    expect(span.textContent).toBe(NAME)
  })
})