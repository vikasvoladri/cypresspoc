var pageLocators = require('../locators/HomePageLocators.js');


export function verifyThatExpectedUserIsDisplayed(){
    cy.get(pageLocators.UserWelcomeMessage).should('contain', 'Welcome vikas.voladri');
}

export function clickOnLogoutLink(){
    cy.get(pageLocators.LogoutLink).click();
}