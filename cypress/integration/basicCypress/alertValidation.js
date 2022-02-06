it('this is alert test case',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    cy.get('#alertbtn').click()
    cy.get("[value='Confirm']").click()
    //window alert 
    // using following method we can validate window alert
    cy.on('window:alert',(str)=>{
        //mocha 
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })
    //window confirm 
    //using following method we can validate window confirm
    cy.on('window:confirm',(str)=>{
        //mocha 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })

})