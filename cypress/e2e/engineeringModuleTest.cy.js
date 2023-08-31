import Engineering from "../pageObjects/engineeringModule.js"

let testdata;

describe('Engineering Module Test', () => {
    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        });

        cy.visit("https://www.indiabix.com/");

    });

    it('Verify that user can clicked on Mechanical Engineering from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnMechanical()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForMechanical);

    })
    it('Verify that user can clicked on ECE from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnECE()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForECE);

    })
    it('Verify that user can clicked on Civil Engineering from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnCivil()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForCivil);

    })
    it('Verify that user can clicked on  EEE from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnEEE()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForEEE);

    })
    it('Verify that user can clicked on CSE from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnCSE()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForCSE);

    })
    it('Verify that user can clicked on Chemical Engineering from Engineering Module', () => {
        const engineering = new Engineering()
        engineering.clickedOnChemical()
        cy.get(engineering.getEngineeringItemHeader).contains(testdata.headingForChemical);

    })


});