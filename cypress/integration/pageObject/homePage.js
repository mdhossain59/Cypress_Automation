class homePage
{
    elements=
    {
        usernameInput:()=>cy.get('#user-name'),
        passwordInput:()=>cy.get('#password'),
        loginButton:()=>cy.get('#login-button')
        

    }
    typeUserName(username){
        this.elements.usernameInput().type(username)
    }
    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    clickLoginButton(){
        this.elements.loginButton().click()
    }






}
module.exports = new homePage();