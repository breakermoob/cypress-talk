describe('Hooks', () => {
    before(() => {
        // runs once before all tests in the block
        cy.log('Before!')
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log('BeforeEach!')
    })

    afterEach(() => {
        // runs after each test in the block
        cy.log('AfterEach!')
    })

    after(() => {
        // runs once after all tests in the block
        cy.log('After!')
    })

    it('Test #1', () => {
        cy.log('Test #1');
    })
    it('Test #2', () => {
        cy.log('Test #1');
    })
})