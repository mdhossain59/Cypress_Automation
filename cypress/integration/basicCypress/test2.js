/// <reference types ="cypress" />

describe('this is second test',()=>
{
    it('this is search test ',()=>
    {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        cy.get('div.product:visible').should('have.length',4)

        //this is parent-child chaining using find() method
        cy.get('div.products').find('.product').should('have.length',4)
        // contain() method will find the text in cypress
        // we can use as() method to create product locator
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
           const vegeString = $el.find('h4.product-name').text()
           
           if (vegeString.includes('Carrot')) {
              cy.wrap($el).contains('ADD TO CART').click()
               
           }
            
        })
        // assert if the logo correctly displayed or not
        cy.get('.brand').should('have.text', 'GREENCART')
         cy.get('.brand').then(function(logoElement)
         {
             cy.log(logoElement.text())
         })
        //cy.log(logo.text())
        
    




    })


})