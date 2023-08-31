const placementPapers = "//a[@href='/placement-papers/companies/']"
const groupDiscussion = "//a[@href='/group-discussion/topics-with-answers/']"
const hrInterview = "//a[@href='/hr-interview/questions-and-answers/']"
const interviewModuleItemHeader = "h1.flex-wrap.w-100.add-color"

let heading;

export default class Interview{

    clickedOnPlacementPapers(){
        cy.xpath(placementPapers).click()
    }

    clickedOnGroupDiscussion(){
        cy.xpath(groupDiscussion).click()
    }

    clickedOnHRInterview(){
        cy.xpath(hrInterview).click()
    }

    getInterviewItemHeader() {
        cy.get(interviewModuleItemHeader).invoke('text').then((text) => {
            heading = text
        })
        return heading;
    }

}