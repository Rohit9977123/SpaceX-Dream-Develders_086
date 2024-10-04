class AddressBookPage {

    // Method to navigate to the Address Book section
    goToAddressBook() {
      // Visit the 'My Account' page using the provided URL
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account');
      
      // Click on the 'My Account' dropdown using the 'title' attribute for selector
      cy.get('a[title="My Account"]').click();  // Selector for the dropdown
      
      // Click on 'My Account' from the dropdown options
      cy.contains('My Account').click();
  
      // Assert that the URL contains 'account' to verify we are on the correct page
      cy.url().should('include', 'account');  // Adjust URL check as needed
  
      // Assert that the heading on the page contains 'My Account' to confirm page load
      cy.get('h2').should('contain', 'My Account');  // Check page heading
      
      // Click on the 'Address Book' option from the side menu (selector based on its position)
      cy.get('#column-right > div > a:nth-child(4)').click({ multiple: true });  // Address Book option
    }
  
    // Method to click the edit button for an existing address
    editAddress() {
      // Wait for 5 seconds to ensure the page is fully loaded (can be adjusted based on load time)
      cy.wait(5000);
      
      // Click the 'Edit' button for the first address listed in the table
      cy.get('#content > div.table-responsive > table > tbody > tr > td.text-right > a.btn.btn-info')
        .click();  // Ensure the edit button is visible and clickable before interacting
    }
    
    // Method to update an existing address with new details
    updateAddress(firstName, lastName, company, address1, address2, city, postcode, country, region) {
      // Clear the 'First Name' field and enter the new first name
      cy.get('#input-firstname').clear().type("Rohit");
      
      // Clear the 'Last Name' field and enter the new last name
      cy.get('#input-lastname').clear().type("Chouhan");
      
      // Clear the 'Company' field and enter the new company name
      cy.get('#input-company').clear().type("Amazon");
      
      // Clear the 'Address 1' field and enter the new address
      cy.get('#input-address-1').clear().type("Hanuman mandir road bamnala");
      
      // Clear the 'Address 2' field and enter the new address details
      cy.get('#input-address-2').clear().type("Halka no 14 gram Bilawali,ganesh nagar");
      
      // Clear the 'City' field and enter the new city name
      cy.get('#input-city').clear().type("INDORE");
      
      // Clear the 'Postcode' field and enter the new postcode
      cy.get('#input-postcode').clear().type("452001");
      
      // Select the country 'India' from the dropdown
      cy.get('#input-country').select("India");
      
      // Select the state/region 'Madhya Pradesh' from the dropdown
      cy.get('#input-zone').select("Madhya Pradesh");
      
      // Click the 'Submit' button to save the updated address information
      cy.get('input[type="submit"]').click();  // Continue button
      
      // Click on the 'Log Out' option in the side menu after updating the address
      cy.get('#column-right > div > a:nth-child(13)').click();  // Log out option
    }
  }
  
  export default AddressBookPage;
  

