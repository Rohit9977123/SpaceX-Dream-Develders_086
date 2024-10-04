class LoginPage {

  // Method to enter the URL and visit the website
  Enterurl() {
    // Use Cypress visit command to navigate to the TutorialsNinja demo website
    cy.visit('https://tutorialsninja.com/demo/');
  }

  // Method to handle login functionality
  login() {
    // Click the "My Account" dropdown menu (this CSS selector targets the correct element)
    cy.get('#top-links > ul > li.dropdown > a > span.hidden-xs.hidden-sm.hidden-md').click({force: true});

    // Verify that the dropdown contains 'Register' option and ensure it's visible
    cy.contains('Register').should('be.visible');
    
    // Verify that the dropdown contains 'Login' option and ensure it's visible
    cy.contains('Login').should('be.visible');
    
    // Click the 'Login' option in the dropdown menu (using nth-child to target the specific option)
    cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a').click();

    // Input email into the email field (using CSS selector for the input element)
    cy.get('#input-email').type("rohitchouhankgn11@gmail.com");

    // Input password into the password field (using CSS selector for the input element)
    cy.get('#input-password').type("Rohit@DmauS6");

    // Click the submit button to attempt login (using input[type="submit"] to target the submit button)
    cy.get('input[type="submit"]').click();
  }
}


export default LoginPage;

