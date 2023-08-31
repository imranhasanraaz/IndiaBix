const loginButton = '#btnLogin'
const userName = '#inp_username'
const password = '#inp_pass'
const login = "button[name='submit']"
const profileType = ".text-box"
const invalidInfoMessage = '#js_resp'
let result;

export default class LoginModule {

    clickedOnLoginFromHomepage() {
        cy.get(loginButton).click()
    }
    setUsername(username) {
        cy.get(userName).type(username)
    }
    setPassword(key) {
        cy.get(password).type(key)
    }
    clickedOnLogin() {
        cy.get(login).click()
    }
    getProfileType() {
        cy.get(profileType).invoke('text').then((text) => {
            result = text;
        });
        return result
    }
    getInvalidCredentailsMessage() {
        cy.get(invalidInfoMessage).invoke('text').then((text) => {
            result = text
        })
        return result;
    }
}