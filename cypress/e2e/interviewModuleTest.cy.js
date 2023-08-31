import Interview from "../pageObjects/interviewModule.js"

let testdata;

describe('Testing Interview Module', () => {
    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        });

        cy.visit("https://www.indiabix.com/");

    });

    it('Verify that user can clicked on Placement Papers from Interview Module', () => {
        const interview = new Interview()
        interview.clickedOnPlacementPapers()
        cy.get(interview.getInterviewItemHeader).contains(testdata.headingForPlacementPapers);

    })

    it('Verify that user can clicked on Group Discussion from Interview Module', () => {
        const interview = new Interview()
        interview.clickedOnGroupDiscussion()
        cy.get(interview.getInterviewItemHeader).contains(testdata.headingForGroupDiscussion);

    })

    it('Verify that user can clicked on HR Interview from Interview Module', () => {
        const interview = new Interview()
        interview.clickedOnHRInterview()
        cy.get(interview.getInterviewItemHeader).contains(testdata.headingForHRinterview);

    })

});