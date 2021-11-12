
describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name-input]');
    const pepporniInput = () => cy.get('input[name=pepporni');
    const sausageInput = () => cy.get('input[name=sausage]');
    const oliveInput = () => cy.get('input[name=olive]');
    const extracheeseInput = () => cy.get('input[name=extra-cheese]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        pepporniInput().should('exist');
        sausageInput().should('exist');
        oliveInput().should('exist');
        extracheeseInput().should('exist');
        submitBtn().should('exist');

        cy.contains('Submit Quote').should('exist');
        cy.contains(/submit quote/i).should('exist');
    })

    describe('Filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Lee, Kevin Lee')
                .should('have.value', 'Lee, Kevin Lee');

            pepporniInput()
                .should('have.value', '')
                .type('Lee, Kevin Lee')
                .should('have.value', 'Lee, Kevin Lee');

            sausageInput()
                .should('have.value', '')
                .type('Lee, Kevin Lee')
                .should('have.value', 'Lee, Kevin Lee');

            oliveInput()
                .should('have.value', '')
                .type('Lee, Kevin Lee')
                .should('have.value', 'Lee, Kevin Lee');

            extracheeseInput()
                .should('have.value', '')
                .type('Lee, Kevin Lee')
                .should('have.value', 'Lee, Kevin Lee');
        })

        it('the submit button enables when both inputs are filled out', () => {
            nameInput().type('Kevin Lee');
            pepporniInput().type('Test EVERYTHING!');
            sausageInput().type('Test EVERYTHING!');
            oliveInput().type('Test EVERYTHING!');
            extracheeseInput().type('Test EVERYTHING!');
            submitBtn().should('not.be.disabled');
        })

    })

    describe('Adding a new quote', () => {
        it('can submit and delete a new quote', () => {
            nameInput().type('CSS is so much fun!');
            pepporniInput().type('Kevin');
            sausageInput().type('Kevin');
            oliveInput().type('Kevin');
            extracheeseInput().type('Kevin');
            submitBtn().click();
            cy.contains('Kevin').should('exist');
            cy.contains('Kevin').siblings('button:nth-of-type(2)').click();
            cy.contains('Kevin').should('not.exist');
        })
    })

    describe('Editing an existing quote', () => {
        it('can edit a quote', () => {
            nameInput().type('Always console.log!');
            pepporniInput().type('Kevin');
            sausageInput().type('Kevin');
            oliveInput().type('Kevin');
            extracheeseInput().type('Kevin');
            submitBtn().click();
            cy.contains('Kevin').siblings('button:nth-of-type(1)').click();
            nameInput().should('have.value', 'Always console.log!');
            pepporniInput().should('have.value', 'Kevin');
            sausageInput().should('have.value', 'Kevin');
            oliveInput().should('have.value', 'Kevin');
            extracheeseInput().should('have.value', 'Kevin');
            nameInput().type(' Please!');
            pepporniInput().type(' Kevin');
            sausageInput().type(' Kevin');
            oliveInput().type(' Kevin');
            extracheeseInput().type(' Kevin');
            submitBtn().click();
            cy.contains('Always console.log! Please! (Kevin Lee)');
            cy.contains('Kevin').next().next().click();
            cy.contains('Kevin').should('not.exist');
        })
    })
})