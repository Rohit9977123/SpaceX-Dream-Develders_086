class CheckoutPage {
    
        
        billingDetails(){
            cy.get('#content > div.buttons.clearfix > div.pull-right > a').click();
            cy.get('[id="button-payment-address"]').click();
            cy.wait(2000)
            
        }
        //click on continue
       
       
          
          //Step 3:
          //clicking continue for Delivery Details

        deliveryDetails(){
        cy.get('#button-shipping-address').click()
       
       }
        //Creating Method for :Step 4: Delivery Method 
        //clicking continue Delivery Details
     
        deliveryMethod(){
            cy.xpath('//input[@id="button-shipping-method"]').click()
        }
     

       
         
    //Step 5: PaymentMethod 
         paymentCheckBox(){

           //Marking Payment Term and Condition 
           cy.get('[name="agree"]').check()

           //clicking continue

           cy.xpath('//input[@id="button-payment-method"]').click()
       }
         //Step 6: Confirming Order 
    orderConfirm(){
        cy.xpath('//input[@id="button-confirm"]').click()

       cy.get('[id="content"]').contains('Your order has been successfully processed!').should('be.visible')
    }
}


export default CheckoutPage;
