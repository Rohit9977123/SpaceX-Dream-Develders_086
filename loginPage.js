class LoginPage {
  
      // enter the url is 
      Enterurl()
      {
          cy.visit('https://tutorialsninja.com/demo/');
      }

    login() {
        // Find the "My Account" dropdown element (adjust the selector as needed)
    cy.get('#top-links > ul > li.dropdown > a > span.hidden-xs.hidden-sm.hidden-md').click({force: true});

    // Verify that the dropdown contains the expected options
    cy.contains('Register').should('be.visible');
    cy.contains('Login').should('be.visible');
    // click a login
    cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a').click();
  
      // Consider using a better selector or waiting for a specific element/condition
      
  
      cy.get('#input-email').type("rohitchouhankgn11@gmail.com");
      cy.get('#input-password').type("Rohit@DmauS6");
      cy.get('input[type="submit"]').click();
    }
}

export default LoginPage;
