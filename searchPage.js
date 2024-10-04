class SearchPage {

    // Method to search for a product by name
    searchProduct(productName) {
      // Find the search input field using its name attribute and type the product name ("iphone" in this case)
      cy.get('input[name="search"]').type("iphone");
      
      // Click the search button to submit the search request
      cy.get('.btn.btn-default.btn-lg').click();  // Search button
      
      // Click on the category in the navigation menu (example: clicking on a category link in the 6th position)
      cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(6) > a').click();
    }
  
    // Method to add the searched product to the cart
    addToCart() {
      // Click the "Add to Cart" button for the first product in the search results
      // Force click is used in case the button is not immediately clickable due to overlays or other elements
      cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1) > span').click({force: true});  // Add to Cart button
    }
  }
  
  export default SearchPage;
