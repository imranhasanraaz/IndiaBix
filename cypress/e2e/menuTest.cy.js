import Menu from "../pageObjects/menu.js"

let testdata;

describe('Testing Menu', () => {
    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        });

        cy.visit("https://www.indiabix.com/");
        const menu = new Menu();
        menu.clickedOnMenu();
    });

    it('Verify that user can click on Arithmetic Aptitude from menu', () => {
        const menu = new Menu();
        menu.clickedOnArithmeticAptitude();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforAptitude);
    });

    it('Verify that user can click on Data Interpretation from menu', () => {
        const menu = new Menu();
        menu.clickedOnDataInterpretation();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforInterpretation);
    });

    it('Verify that user can click on Verbal Ability from menu', () => {
        const menu = new Menu();
        menu.clickedOnVerbalAbility();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforVerbalAbility);
    });

    it('Verify that user can click on Logical Reasoning from menu', () => {
        const menu = new Menu();
        menu.clickedOnLogicalReasoning();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforLogicalReasoning);
    });

    it('Verify that user can click on Verbal Reasoning from menu', () => {
        const menu = new Menu();
        menu.clickedOnVerbalReasoning();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforVerbalReasoning);
    });

    it('Verify that user can click on Nonverbal Reasoning from menu', () => {
        const menu = new Menu();
        menu.clickedOnNonVerbalReasoning();
        cy.get(menu.getMenuItemHeader).contains(testdata.headingforNonVerbal);
    });
});