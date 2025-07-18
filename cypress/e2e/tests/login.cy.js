import LoginPage from '../../pages/LoginPage'

describe('Login Tests - SauceDemo (POM)', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Should login successfully with valid credentials', () => {
    loginPage.fillUsername(Cypress.env('validUsername'))
    loginPage.fillPassword(Cypress.env('validPassword'))
    loginPage.clickLogin()

    cy.url().should('include', '/inventory.html')
  })

    it('Should show an error with invalid credentials', () => {
    loginPage.fillUsername(Cypress.env('invalidUsername'))
    loginPage.fillPassword(Cypress.env('invalidPassword'))
    loginPage.clickLogin()

    loginPage.getErrorMessage().should('be.visible')
      .and('contain', 'Username and password do not match')
  })
})
