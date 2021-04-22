 Cypress.Commands.add('login', () => {
    cy.visit('https://demo.realworld.io/#/login');
    cy.get('[type=email]').type('wikoxo4325@vreagles.com{enter}').click();
    cy.get('[type=password]').should('be.enabled').type('wikoxo4325{enter}').click();
    cy.hash().should('eq', '#/')
 })