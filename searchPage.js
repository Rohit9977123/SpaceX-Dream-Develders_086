class SearchPage {

    // Method to search for a product by name
    searchProduct(productName) {
      // Find the search input field using its name attribute and type the product name ("iphone" in this case)
      cy.get('input[name="search"]').type("hp");
     
      
      // Click the search button to submit the search request
      cy.get('.btn.btn-default.btn-lg').click();  // Search button
      
      
    }
  
    // Method to add the searched product to the cart
    addToCart() {
      // Click the "Add to Cart" button for the first product in the search results
      // Force click is used in case the button is not immediately clickable due to overlays or other elements
      cy.get('#content > div:nth-child(8) > div > div > div:nth-child(2) > div.button-group > button:nth-child(1) > span').click({force: true});  // Add to Cart button
      cy.xpath('//button[@class="btn btn-primary btn-lg btn-block"]').click()
    }
  }
  
  export default SearchPage;
