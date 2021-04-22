var PlaceOrderLocators = require('../locators/PlaceOrderLocators.js');
var timeout=require('./Timeouts.js');


export function clickPlaceOrder() {
    cy.contains(PlaceOrderLocators.PlaceOrderButton,'Place Order').should('be.visible').click();
}

export function enterTheDetails() {
    cy.get(PlaceOrderLocators.Name).should('be.visible').type('wikoxo');
    cy.get(PlaceOrderLocators.Country).should('be.visible').type('India');
    cy.get(PlaceOrderLocators.City).should('be.visible').type('Hyderabad');
    cy.get(PlaceOrderLocators.CreditCard).should('be.visible').type('64fv1dbgbgtr');
    cy.get(PlaceOrderLocators.Month).should('be.visible').type('Nov');
    cy.get(PlaceOrderLocators.Year).should('be.visible').type("2222");
}

export function clickPurchase() {
    cy.contains(PlaceOrderLocators.PurchaseButton,'Purchase').should('be.visible').click();
}

export function verifyConfirmationTextIsDisplayed(){
    cy.contains('h2','Thank you for your purchase').should('be.visible');
}

export function clickOkButtonOnConfirmationPopup() {
    cy.contains(PlaceOrderLocators.OkPopUp,'OK').should('be.visible').wait(timeout.shortWait).click();
}