var pageLocators = require('../locators/AddToCartLocators.js');
var timeout=require('./Timeouts.js');


export function selectItem() {
    cy.get(pageLocators.AppleMonitorLink).contains('Apple monitor 24').click();
}

export function verifyTheItem() {
    cy.get(pageLocators.TextAppleMonitor).should('contain','Apple monitor 24');
    cy.get(pageLocators.PriceValue).should('contain','$400');
}

export function clickAddToCart() {
    cy.contains(pageLocators.CartButton,'Add to cart').click();
}

export function selectTheItem() {
    cy.contains(pageLocators.AppleMonitorLink,'Apple monitor 24').click();
}