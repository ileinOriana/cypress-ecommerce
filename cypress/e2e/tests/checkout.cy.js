import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Checkout Flow - SauceDemo', () => {
  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    loginPage.fillUsername(Cypress.env('validUsername'))
    loginPage.fillPassword(Cypress.env('validPassword'))
    loginPage.clickLogin()
  })

  it('Should complete checkout successfully after adding product to cart', () => {
    inventoryPage.addBackpackToCart()
    inventoryPage.goToCart()

    checkoutPage.startCheckout()
    checkoutPage.fillCheckoutInfo('Ile', 'Gonzalez', '1414')
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()

    checkoutPage.getSuccessMessage().should('contain', 'Thank you for your order')
  })
})