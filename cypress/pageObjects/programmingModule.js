const cProgramming = "//a[@href='/c-programming/questions-and-answers/']"
const moduleHeader = "h1.flex-wrap.w-100.add-color"

let heading

export default class Programming{
    clickedOnCProgramming(){
        cy.xpath(cProgramming).click()
    }

    getProgrammingItemHeader() {
        cy.get(moduleHeader).invoke('text').then((text) => {
            heading = text
        })
        return heading;
    }
}