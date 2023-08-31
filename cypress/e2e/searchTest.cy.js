import Search_Box from "../pageObjects/search.js";

let testdata;


describe("Testing search box", () => {
  before(() => {
    cy.fixture('testData.json').then((data) => {
      testdata = data;
    });
  });

  it("Verify that search box works properly", () => {
    cy.visit("https://www.indiabix.com/");
    const search = new Search_Box()
    search.setSearchKeyword(testdata.searchKeyword);
    search.getSearchInSameTab();
    search.clickedOnSearchButton();
    const expectedResult = testdata.verifySearchKeyword;

    cy.origin('https://www.google.co.in', { args: { expectedResult } }, ({ expectedResult }) => {
      cy.get("[jsname='yZiJbe']").should('be.visible').invoke('text').then((text) => {
        expect(text).to.include(expectedResult);
      });
    });
  });
});
