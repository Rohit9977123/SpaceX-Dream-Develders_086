#TutorialsNinja-AddressBook SpaceX-Dream-Develders_086
OpenCart E-Commerce Testing Project Overview This project implements automated testing for the OpenCart e-commerce platform using Cypress and the Page Object Model (POM) design pattern. It covers testing of key features like user registration, product search, shopping cart, checkout, affiliate registration, and address book management. The project also employs best practices in testing, including the use of waits, assertions, and reusable methods for improved test maintainability.

Features Tested User Registration and Authentication

Register a new user. Log in and log out. Validate form fields. E-Commerce Functionality

Search for products. Add products to the shopping cart. Manage the checkout process (including terms and conditions). Affiliate Program

Register as an affiliate. Fill out the affiliate form with validation checks. Address Book Management

Edit and update address book details. Technologies Used Cypress (v10+): Test automation framework. JavaScript (ES6+): Scripting language for writing test cases. Page Object Model (POM): Design pattern for separating page elements and actions. GitHub: For version control and collaboration. Project Structure bash Copy code . ├── cypress │ ├── Integration │ │ └── PageClass │ │ └── AffiliateTesting.js # Test file for affiliate registration │ └── support │ └── PageClass │ ├── AffiliatePage.js # Page Object for Affiliate actions │ ├── Checkout.js # Page Object for Checkout actions │ ├── HomePage.js # Page Object for Homepage actions │ ├── LoginPage.js # Page Object for Login actions │ ├── LogoutPage.js # Page Object for Logout actions │ └── Register.js # Page Object for Registration actions └── cypress.config.js # Cypress configuration file Page Objects

HomePage.js Navigates to the homepage. Verifies the visibility of the logo. Handles account-related dropdowns.

Register.js Fills out the registration form. Handles the privacy policy agreement. Verifies registration success.

LoginPage.js Inputs email and password. Handles login verification and redirects.

LogoutPage.js Handles the logout process.

Checkout.js Searches for products. Adds items to the shopping cart. Completes the checkout process (billing details, order placement).

AffiliatePage.js Completes the affiliate registration form. Selects the payment method. Verifies successful submission. Test Scenarios Scenario 1: Complete User Journey (Registration, Login, Shopping, Checkout) javascript Copy code it('should perform the complete workflow', () => { // User Registration homePage.EnterURL(); homePage.VerifyLogoVisibility(); homePage.GoToRegisterPage(); registerPage.EnterFirstName('Mohit'); registerPage.EnterLastName('Kumar'); registerPage.EnterEmail('testuser@gmail.com'); registerPage.SubmitRegistration();

// Logout & Login logoutPage.Logout(); homePage.GoToLoginPage(); loginPage.EnterEmail('testuser@gmail.com'); loginPage.EnterPassword('password123'); loginPage.Login();

// Product Search & Checkout checkout.SearchProduct('HP Laptop'); checkout.AddToCart(); checkout.ProceedToCheckout(); checkout.CompleteCheckout(); }); Scenario 2: Affiliate Registration javascript Copy code it('Affiliate Page', () => { // Login homePage.EnterURL(); loginPage.EnterEmail('Prachidubey449@gmail.com'); loginPage.EnterPassword('password123'); loginPage.Login();

// Affiliate Registration affiliatePage.clickOnAffiliate(); affiliatePage.FillAffiliateForm({ company: 'SDL.pvt', website: 'www.SDL.com', taxID: 'TAX12345', paymentMethod: 'Cheque', chequePayeeName: 'Mohit Kumar' }); affiliatePage.SubmitAffiliateForm(); affiliatePage.VerifyAffiliateSuccess(); }); Setup and Running Tests Prerequisites Node.js (v12 or higher) npm (Node Package Manager) Cypress (installed via npm) Installation Steps Clone the Repository:

bash Copy code git clone https://github.com/Mohit-test-coder/Construct_Week_Unit3_Project.git Navigate to the Project Directory:

bash Copy code cd Construct_Week_Unit3_Project Install the Required Dependencies:

bash Copy code npm install Running Tests Run Tests in Headless Mode:

bash Copy code npx cypress run Run Tests in Interactive Mode (Cypress Test Runner):

bash Copy code npx cypress open This will open the Cypress Test Runner, where you can manually select and run individual test cases. Best Practices Implemented Page Object Model (POM) for maintaining cleaner and reusable code. Assertions to verify expected outcomes. Waits to ensure elements are loaded before interaction. Screenshots for better reporting and debugging (taken at key steps). Error Handling for missing or invalid data inputs. Future Enhancements API Testing: Add tests for the backend API to complement UI tests. Data-Driven Testing: Read test data from external files (like JSON). CI/CD Pipeline Integration: Implement Continuous Integration using GitHub Actions. Visual Regression Testing: Capture screenshots and compare them to detect unintended UI changes. Contributing Fork the Repository. Create Your Feature Branch: bash Copy code git checkout -b feature/AmazingFeature Commit Your Changes: bash Copy code git commit -m "Add some AmazingFeature" Push to the Branch: bash Copy code git push origin feature/AmazingFeature Open a Pull Request. Author Prachi Dubey Transitioning into software development, with a passion for testing and automation. License This project is licensed under the MIT License - see the LICENSE.md file for details.
