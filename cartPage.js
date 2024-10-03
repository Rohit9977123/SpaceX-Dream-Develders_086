class CartPage {
    goToCart() {
        cy.get("#product-category > div.alert.alert-success.alert-dismissible > a:nth-child(3)").click();  // Shopping cart link in the success message
        
    }

    proceedToCheckout() {
        cy.get('#content .pull-right a[href*="checkout"]').click();  // Checkout button
         // Assert the out-of-stock message is displayed
       cy.get('.alert-danger').should('contain', 'Products marked with *** are not available in the desired quantity or not in stock!');
    }
}

export default CartPage;
