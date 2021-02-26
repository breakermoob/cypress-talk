context('Basic Functions', () => {
    describe('AAA', {
        viewportWidth: 1920
    }, () => {
        it('visit', { retries: 2 }, () => {
            const name = 'dress';
            cy.visit('/index.php');
            cy.get('#search_query_top').clear().type(name).should('include.value', name);
        });
        it('Multiple Asserts', () => {
            cy.get('#searchbox > .btn').click();
            cy.wait(3000)
            cy.get('.lighter', { timeout: 10000 }).should('include.text', 'dress');
            cy.get('.lighter', { timeout: 10000 }).should('have.css', 'cursor');
        });
        it('Contain & Select', () => {
            cy.get('#contact-link').contains('Contact').click();
            cy.get('#id_contact').select('Webmaster');
        });
    });
})