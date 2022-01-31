/// <reference types="cypress" />

describe('this is my first test',()=>{

    it('this is gogole test',()=>{

        cy.visit('https://www.google.com/')

        cy.get('title')
        .invoke('text')
        .should('equal','Google')
        

    })

    it('this is RahulShetty website test',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('title')
        .invoke('text')
        .should('equal','GreenKart - veg and fruits kart')
        

    })

})