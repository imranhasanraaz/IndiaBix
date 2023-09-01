import Programming from "../pageObjects/programmingModule.js";

let testdata


describe('Testing Programming Module', () => {
    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        });

    });
    it('Verify that user can clicked on C Programming from Programming Module', () => {
        cy.visit("https://www.indiabix.com/");
        const programming = new Programming()
        programming.clickedOnCProgramming()
        cy.get(programming.getProgrammingItemHeader).contains(testdata.headingForCProgramming);

    })
})