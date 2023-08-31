const searchBox = ".search-box"
const searchButton = "#search-form > button > i"
const searchForm = "#search-form"

export default class Search_Box {

    setSearchKeyword(keyword) {
        cy.get(searchBox).type(keyword)


    }
    getSearchInSameTab() {
        cy.get(searchForm).invoke('removeAttr', 'target')

    }

    clickedOnSearchButton() {
        cy.get(searchButton).click()

    }

}