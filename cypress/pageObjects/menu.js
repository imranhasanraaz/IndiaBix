const menu = "//i[@class='mdi mdi-menu']"
const menuItemHeader = "h1.flex-wrap.w-100.add-color"
const arithmeticAptitude = '//span[text()="Arithmetic Aptitude"]'
const dataInterpretation = '//span[text()="Data Interpretation"]'
const verbalAbility = '//span[text()="Verbal Ability"]'
const logicalReasoning = '//span[text()="Logical Reasoning"]'
const verbalReasoning = '//span[text()="Verbal Reasoning"]'
const nonVerbalReasoning = '//span[text()="Nonverbal Reasoning"]'

let heading;

export default class Menu {

    clickedOnMenu() {
        cy.xpath(menu).click()
    }
    getMenuItemHeader() {
        cy.get(menuItemHeader).invoke('text').then((text) => {
            heading = text
        })
        return heading;
    }
    clickedOnArithmeticAptitude() {
        cy.xpath(arithmeticAptitude).click()
    }

    clickedOnDataInterpretation() {
        cy.xpath(dataInterpretation).click()
    }

    clickedOnVerbalAbility() {
        cy.xpath(verbalAbility).click()
    }

    clickedOnLogicalReasoning() {
        cy.xpath(logicalReasoning).click()
    }

    clickedOnVerbalReasoning() {
        cy.xpath(verbalReasoning).click()
    }

    clickedOnNonVerbalReasoning() {
        cy.xpath(nonVerbalReasoning).click()
    }

}