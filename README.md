# Cypress E2E Automation – SauceDemo.com

This project contains an automated test suite developed in Cypress following the **Page Object Model (POM)** structure.  
It simulates key user flows on the [SauceDemo](https://www.saucedemo.com) e-commerce demo application.

---

## Covered Functionalities

- Successful login  
- Failed login (invalid credentials)  
- Add product to cart  
- Complete checkout flow  

---

## Project Structure

- **Page Objects** contain element locators and reusable actions.  
- **Test files** are organized by feature for readability and scalability.

---

## Getting Started

### 1. Clone the repo

``bash
git clone https://github.com/ileinOriana/cypress-ecommerce
cd cypress-saucedemo``

### 2. Install dependencies
``npm install``

### 3. Create environment variables
In the root of the project, create a file called cypress.env.json with the following content:
``{
  "validUsername": "standard_user",
  "validPassword": "secret_sauce",
  "invalidUsername": "wrong_user",
  "invalidPassword": "wrong_pass"
}``

### 4. Run the test suite
Launch Cypress in interactive mode:
``npx cypress open``
Or run it in headless mode:
``npx cypress run``