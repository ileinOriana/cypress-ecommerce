class InventoryPage {
  elements = {
    addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartIcon: () => cy.get('.shopping_cart_link')
  }

  addBackpackToCart() {
    this.elements.addToCartButton().click()
  }

  goToCart() {
    this.elements.cartIcon().click()
  }

  assertCartCountIs(count) {
  this.elements.cartBadge().should('contain', count)
}

}

export default InventoryPage