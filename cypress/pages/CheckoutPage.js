class CheckoutPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    successMessage: () => cy.get('.complete-header')
  }

  startCheckout() {
    this.elements.checkoutButton().click()
  }

  fillCheckoutInfo(first, last, zip) {
    this.elements.firstNameInput().type(first)
    this.elements.lastNameInput().type(last)
    this.elements.postalCodeInput().type(zip)
  }

   clickContinue() {
    this.elements.continueButton().click()
  }

  clickFinish() {
    this.elements.finishButton().click()
  }

  getSuccessMessage() {
    return this.elements.successMessage()
  }
}

export default CheckoutPage