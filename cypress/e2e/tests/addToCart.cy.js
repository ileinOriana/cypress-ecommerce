import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'

describe('Cart Functionality - SauceDemo', () => {
  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    loginPage.fillUsername(Cypress.env('validUsername'))
    loginPage.fillPassword(Cypress.env('validPassword'))
    loginPage.clickLogin()
  })

  it('Should add a product to the cart and see it in the cart page', () => {
    inventoryPage.addBackpackToCart()
    inventoryPage.assertCartCountIs(1)
    inventoryPage.goToCart()
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible')
  })
})