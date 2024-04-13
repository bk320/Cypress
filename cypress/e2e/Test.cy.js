describe('suite name_1', () => {
    it('verify login', () => {      
        cy.visit("https://comicnexus.onrender.com/")
        cy.wait(1500)  
        cy.get("input[placeholder='Nombre de usuario']").type("ComicNexus")
        cy.wait(1500)  
        cy.get("input[placeholder='Contraseña']").type("ComicNexus123")
        cy.wait(1500)  
        cy.get("button[type='submit']").click()
        cy.wait(1500)  
        cy.get('div.dropdown > .btn').click()
        cy.wait(1500) 
        cy.get(':nth-child(5) > .dropdown-item').click()
    })
    
})