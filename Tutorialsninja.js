import LoginPage from "./loginPage";
import SearchPage from "./searchPage";
import CartPage from "./cartPage";
import CheckoutPage from "./checkoutPage";
import AddressBookPage from "./addressBookPage";

describe('Tutorialsninja', () => {
    // Initializing instances of each page object
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const addressBookPage = new AddressBookPage();
    
    // Test case: Search and add product to cart, then proceed to checkout and update address
    it('should search and add product to cart', () => {
        
        // Step 1: Open the Tutorialsninja website
        loginPage.Enterurl();

        // Step 2: Log into the user account
        loginPage.login();

        // Step 3: Search for 'iPhone' and add the product to the cart
        searchPage.searchProduct('iPhone');
        searchPage.addToCart();

        // Step 4: Go to the cart and proceed to checkout
        cartPage.goToCart();
        cartPage.proceedToCheckout();

        // Step 5: Complete the checkout process
        checkoutPage.completeCheckout();

        // Step 6: Go to the Address Book, edit the address, and update it with new details
        addressBookPage.goToAddressBook();
        addressBookPage.editAddress();
        addressBookPage.updateAddress('John', 'Doe', 'New Company', '123 Street', 'Apt 4', 'New City', '10001', 'United States', 'New York');
    });
});

