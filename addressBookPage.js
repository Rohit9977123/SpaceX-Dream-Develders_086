class AddressBookPage {
    goToAddressBook() {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account');
        // Click on the 'My Account' dropdown
        cy.get('a[title="My Account"]').click();  // Selector for the dropdown
        
        // Click on the 'My Account' option from the dropdown
        cy.contains('My Account').click();

        // Assert that the My Account page is loaded (based on the page heading or URL)
        cy.url().should('include', 'account');  // Adjust URL check as needed
        cy.get('h2').should('contain', 'My Account');  // Check page heading
        cy.get('#column-right > div > a:nth-child(4)').click({ multiple: true });  // Address Book option
    }

    editAddress() {
        cy.wait(5000);  // Wait 5 seconds for page load (adjust as needed)
        cy.get('#content > div.table-responsive > table > tbody > tr > td.text-right > a.btn.btn-info')
          
          .click();  // Ensure element is visible before clicking
    }
    

    updateAddress(firstName, lastName, company, address1, address2, city, postcode, country, region) {
        cy.get('#input-firstname').clear().type("Rohit");
        cy.get('#input-lastname').clear().type("Chouhan");
        cy.get('#input-company').clear().type("Amazon");
        cy.get('#input-address-1').clear().type("Hanuman mandir road bamnala");
        cy.get('#input-address-2').clear().type("Halka no 14 gram Bilawali,ganesh nagar");
        cy.get('#input-city').clear().type("INDORE");
        cy.get('#input-postcode').clear().type("452001");
        cy.get('#input-country').select("India");
        cy.get('#input-zone').select("Madhya Pradesh");
        cy.get('input[type="submit"]').click();  // Continue button
        cy.get('#column-right > div > a:nth-child(13)').click()//log out
    }
}

export default AddressBookPage;
