import LoginModule from "../pageObjects/login.js";

let testdata;

describe('Testing Login Module', () => {
  before(() => {
    cy.fixture('testData.json').then((data) => {
      testdata = data;
    });
  });

  it('Verify that user can login with valid username and password', () => {
    cy.visit("https://www.indiabix.com/");
    const login = new LoginModule()
    login.clickedOnLoginFromHomepage()
    login.setUsername(testdata.username)
    login.setPassword(testdata.password)
    login.clickedOnLogin();
    cy.get(login.getProfileType).contains(testdata.profileType)
  })

  it('Verify that user can not login with Invalid username', () => {
    cy.visit("https://www.indiabix.com/");
    const login = new LoginModule()
    login.clickedOnLoginFromHomepage()
    login.setUsername(testdata.invalidUsername)
    login.setPassword(testdata.password)
    login.clickedOnLogin();
    cy.get(login.getInvalidCredentailsMessage).contains(testdata.invalidCredentialMessage)
  })

  it('Verify that user can not login with Invalid password', () => {
    cy.visit("https://www.indiabix.com/");
    const login = new LoginModule()
    login.clickedOnLoginFromHomepage()
    login.setUsername(testdata.username)
    login.setPassword(testdata.invalidPassword)
    login.clickedOnLogin();
    cy.get(login.getInvalidCredentailsMessage).contains(testdata.invalidCredentialMessage)
  })
})