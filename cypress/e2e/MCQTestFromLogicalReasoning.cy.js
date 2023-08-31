import VerbalAndReasoning from "../pageObjects/verbalAndReasoning.js"

let testdata


describe('MCQ testing from logical Reasoning Module', () => {
    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        });

        cy.visit("https://www.indiabix.com/");

    });

    it('Verify that If user select right option then it will show Explanation', () => {
        const reasoning = new VerbalAndReasoning()
        reasoning.clickedOnLogicalReasoning()
        reasoning.clickedOnNumberSeries()
        reasoning.clickedOnRightOption()
        reasoning.checkedExplanationIsVisible();
    })

    it('Verify that If user select wrong option then it would not show Explanation', () => {
        const reasoning = new VerbalAndReasoning()
        reasoning.clickedOnLogicalReasoning()
        reasoning.clickedOnNumberSeries()
        reasoning.clickedOnWrongOption()
        reasoning.checkedExplanationIsNotVisible();
    })


})