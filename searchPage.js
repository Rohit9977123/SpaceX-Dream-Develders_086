class SearchPage {
    searchProduct(productName) {
    
        cy.get('input[name="search"]').type("Phones");
        
        cy.get('.btn.btn-default.btn-lg').click();  // Search button
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(6) > a').click();
        
    }

    addToCart() {

        cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1) > span').click({force: true});  // Add to Cart button
    }
}

export default SearchPage;
