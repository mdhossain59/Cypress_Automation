import homePage from "../pageObject/homePage";
import inventory from "../pageObject/inventory";
//const myLoginPage = new homePage()
//const webPagetitle = new inventory()

describe.skip('this is test suite',()=>{

    it('this login test',()=>{

        cy.visit('https://www.saucedemo.com/')
        homePage.typeUserName('standard_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLoginButton()
        inventory.elements.gettitle().should('have.text','Products')


})

})