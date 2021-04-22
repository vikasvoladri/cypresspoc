var pageLocators = require('../locators/CategoriesPageLocators.js');
var timeout = require('./Timeouts.js');


export function verifyThatLaptopsLinkIsDisplayed(){
    cy.contains(pageLocators.ClickOnLaptops,'Laptops').should('be.visible');
}

export function clickOnLaptopsButton() {
    cy.contains(pageLocators.ClickOnLaptops,'Laptops').click();
}

export function clickOnNextButton() {
    cy.get(pageLocators.FormNextButton).should('be.visible').wait(timeout.shortWait).click();
}

export function verifyThatNextButtonIsNotDisplayed() {
    cy.get(pageLocators.FormNextButton).should('not.be.visible');
}