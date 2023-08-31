const logicalReasoning = "//a[@href='/logical-reasoning/questions-and-answers/']"
const numberSeries = "//a[normalize-space()='Number Series']"
const rightOptionOfQuestionOne = '#lnkOptionLink_B_20'
const wrongOptionOfQuestionOne = '#lnkOptionLink_C_20'
const explanation = "//div[@id='divAnswer_20']//div[@class='mx-green mx-bold explain-lablel'][normalize-space()='Explanation:']"

export default class VerbalAndReasoning{

    clickedOnLogicalReasoning(){
        cy.xpath(logicalReasoning).click()
    }

    clickedOnNumberSeries(){
        cy.xpath(numberSeries).click()
    }

    clickedOnRightOption(){
        cy.get(rightOptionOfQuestionOne).scrollIntoView();
        cy.get(rightOptionOfQuestionOne).click()
    }
    clickedOnWrongOption(){
        cy.get(wrongOptionOfQuestionOne).scrollIntoView();
        cy.get(wrongOptionOfQuestionOne).click()
    }

    checkedExplanationIsVisible(){
        cy.xpath(explanation).should('be.visible');
    }

    checkedExplanationIsNotVisible(){
        cy.xpath(explanation).should('not.be.visible');
    }

}