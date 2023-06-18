describe('suite name_1', () => {
    it('verify title-positive Shopbarrio', () => {      
        cy.visit("http://micromarket.shopbarrio.online/")//https://opensource-demo.orangehrmlive.com/
        cy.title().should('eq','React App')
    })
    it('verify title-positive', () => {      
        cy.visit("https://opensource-demo.orangehrmlive.com/")//
        cy.title().should('eq','OrangeHRM')
    })
    it('verify title-negative test', () => {      
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })
})

