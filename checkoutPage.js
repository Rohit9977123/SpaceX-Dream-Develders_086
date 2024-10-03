class CheckoutPage {
    completeCheckout() {
         
        
       // Simulate adding a product to the cart (make sure the product is out of stock)
       cy.get('#search > input').type('HTC Touch HD'); // Searching for the product
       cy.get('.btn.btn-default.btn-lg').click();  // Click on the search button

       // Assuming we add the product to the cart
       cy.get('.product-layout .button-group button').contains('Add to Cart').click({force: true}); // Add to Cart button

    
    }
}

export default CheckoutPage;
