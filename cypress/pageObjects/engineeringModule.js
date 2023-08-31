const mechanical = "//a[@href='/mechanical-engineering/questions-and-answers/']"
const civil = "//a[@href='/civil-engineering/questions-and-answers/']"
const ECE = "//a[@title='Electronics and Communication Engineering Questions and Answers']"
const EEE = "//a[@title='Electrical Engineering Questions and Answers']"
const CSE = "//a[@title='Computer Science Questions and Answers']"
const chemical = "//a[normalize-space()='Chemical Engineering']"
const moduleHeader = "h1.flex-wrap.w-100.add-color"

let heading

export default class Engineering{

    clickedOnMechanical(){
        cy.xpath(mechanical).click()
    }
    clickedOnCivil(){
        cy.xpath(civil).click()
    }
    clickedOnECE(){
        cy.xpath(ECE).click()
    }
    clickedOnEEE(){
        cy.xpath(EEE).click()
    }
    clickedOnCSE(){
        cy.xpath(CSE).click()
    }

    clickedOnChemical(){
        cy.xpath(chemical).click()
    }

    getEngineeringItemHeader() {
        cy.get(moduleHeader).invoke('text').then((text) => {
            heading = text
        })
        return heading;
    }

}
