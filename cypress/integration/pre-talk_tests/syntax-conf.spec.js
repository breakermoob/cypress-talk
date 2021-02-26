context('Este escenario es para probar un flujo de solicut', {
    viewportWidth: 720
}, () => {

    describe('Test', {
        viewportWidth: 1920
    }, () => {
        it('Step - visit', { retries: 2 }, () => {
            cy.visit('/index.php');
            cy.wait(10000);
        });
        it('Step - get input clear & type', () => {
            cy.get('#search_query_top').clear();
            cy.get('#search_query_top').type('dress');
        });
        it('Step - load the data',  () => {
            cy.fixture('data.json', 'binary').then((data) => {
                console.log(data);
            })
        });
        it('Step - advanced features', () => {
            cy.fixture('data.json').then((data) => {
                const names = data.names;
                cy.wrap(names).each(($name) => {
                    cy.get('#search_query_top').clear();
                    cy.get('#search_query_top').type($name);
                });
            })
        });
    });

    describe('Test', () => {
        it('Step - visit', () => {
            cy.visit('/index.php');
            cy.wait(10000);
        });
        it('Step - Mobile viewport', () => {
            cy.viewport("iphone-x");
            cy.wait(10000);
        });
    })
})