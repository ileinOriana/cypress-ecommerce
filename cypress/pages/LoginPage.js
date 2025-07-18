class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  }

  fillUsername(username) {
    this.elements.usernameInput().type(username)
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export default LoginPage