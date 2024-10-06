class CartPage {
    goToCart() {
        cy.get("#product-product > div.alert.alert-success.alert-dismissible > a:nth-child(2)").click();  // Shopping cart link in the success message
        
    }

   
}

export default CartPage;
