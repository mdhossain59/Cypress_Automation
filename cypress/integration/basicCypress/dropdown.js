
//this is example of static dropdown
it('this is dropdown examples',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    cy.get('select').select('option3').should('have.value','option3')

    //this is example of dynamic dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list)=>{
        
        if($el.text()=='India')
        {
            cy.wrap($el).click()
        }
        
    })
    cy.get('#autocomplete').should('have.value', 'India')

    // this is visible and invisible elements test
    // this line will visible the element
    cy.xpath("//input[@id='displayed-text']").should('be.visible')
    //this line will hide the element
    cy.get('#hide-textbox').click()

   //this line will assert the hide button
    cy.xpath("//input[@id='displayed-text']").should('not.be.visible')
    //this will show the element
    cy.xpath("//input[@id='show-textbox']").click()
    cy.xpath("//input[@id='displayed-text']").should('be.visible')


    // this is radio button check method
    cy.get("input[value='radio2']").check().should('be.checked')
    //cy.get('[for="radio3"] > .radioButton').check()

})