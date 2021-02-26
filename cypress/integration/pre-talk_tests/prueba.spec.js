describe('Prueba', () => {
    it('Paso 1', () => {
        cy.visit('/');
        // cy.url().should("eq", `${Cypress.config().baseUrl}/index.php`);
        cy.get('.login', { timeout: 10000 }).click();
        cy.get('#email_create').type('leoarg@yopmail.com');
        cy.get('#SubmitCreate > span').click();
    });
});