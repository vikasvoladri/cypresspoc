var cartItemLocators = require('../locators/CartItemLocators.js');


export function CheckItemInCart() {
    cy.contains("a", "Cart").should("have.attr", "href", "cart.html").click();
    cy.get(cartItemLocators.TableElement)
        .contains('td', 'Apple monitor 24')
        .should('contain','Apple monitor 24').next()
        .contains('td', '400')
        .should('contain','400')
}

