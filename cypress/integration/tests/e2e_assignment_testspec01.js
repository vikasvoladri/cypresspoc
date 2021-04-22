var username = 'vikas.voladri';
var password = 'Orbita@11'

describe('Demoblaze Testing', () => {

    it('Logging in', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();        
        cy.get('#loginusername').should('be.visible').type(username,{ force: true });
        cy.get('#loginpassword').should('be.visible').type(password);
        cy.get('[type=button]').contains('Log in').click();
        cy.get('#nameofuser').should('contain', 'Welcome vikas.voladri');        
    })

    it('Moving to next page', () => {        
        cy.contains('a','Laptops').click();
        cy.get('button#next2').wait(500).click();
        cy.get('button#next2').should('not.be.visible');
    })

    it("Add item to cart", () => {
        
        cy.contains('a','Apple monitor 24').click();
        cy.get('h2.name').should('contain','Apple monitor 24')
        cy.get('h3.price-container').should('contain','$400')        
        cy.contains('a','Add to cart').click();
    })

    it("Checking item present in cart", () => {
        
        cy.contains("a", "Cart").should("have.attr", "href", "cart.html").click();
        cy.get("tbody#tbodyid")
            .contains('td', 'Apple monitor 24')
            .should('contain','Apple monitor 24')
            .next()
            .contains('td', '400')
            .should('contain','400')
        
    })

    it("Placing an Order", () => {        
        cy.contains('button','Place Order').should('be.visible').click();        
        cy.get("#name").should('be.visible').type('wikoxo');
        cy.get("#country").should('be.visible').type('India')
        cy.get("#city").should('be.visible').type('Hyderabad')
        cy.get("#card").should('be.visible').type('55s551s51w5w5wWW')
        cy.get("#month").should('be.visible').type('Nov')
        cy.get("#year").should('be.visible').type('wikoxo')
        cy.contains("button",'Purchase').should('be.visible').click()
            .wait(500);
        cy.get(".confirm").should('contain','OK').click();
            
    })

})