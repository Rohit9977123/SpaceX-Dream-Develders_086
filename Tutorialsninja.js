import LoginPage from "./loginPage";
import SearchPage from "./searchPage";
import CartPage from "./cartPage";
import CheckoutPage from "./checkoutPage";
import AddressBookPage from "./addressBookPage";



   describe('Tutorialsninja', () => {
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const addressBookPage = new AddressBookPage();
    
    
    it('should search and add product to cart', () => {
        loginPage.Enterurl();

        loginPage.login();
        searchPage.searchProduct('iPhone');
        searchPage.addToCart();
        cartPage.goToCart();
        cartPage.proceedToCheckout();
        checkoutPage.completeCheckout();
        addressBookPage.goToAddressBook();
        addressBookPage.editAddress();
        addressBookPage.updateAddress('John', 'Doe', 'New Company', '123 Street', 'Apt 4', 'New City', '10001', 'United States', 'New York');
        
    });
    
        
        

        
    });
