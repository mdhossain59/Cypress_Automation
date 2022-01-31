
describe('this is test suite',()=>{
    beforeEach('this method will run before every test case',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/') 

    })
    it('this is single test case',()=>{
         
        cy.title().should('eq','OrangeHRM')

    })
    it('this test case 2',()=>{

        cy.get('#logInPanelHeading').should('be.visible')
        cy.xpath("//input[@id='txtUsername']").type('Admin')
        cy.xpath("//input[@id='txtPassword']").type('admin123')
        cy.xpath("//input[@id='btnLogin']").should('be.visible').click()
        cy.get('#welcome').should('be.visible').click()
        //cy.get('#welcome-menu > :nth-child(1) > :nth-child(3)').click()
        cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a')
        .should('be.visible').click()

        

    })
    

})