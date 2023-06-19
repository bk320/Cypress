

describe('XPathLocators', () =>{
    /*it('find no of products', () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click() 
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)
    })*/
    it('verificar mensaje de confirmacion al eliminar un producto', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/h2[1]").contains("¿Estas seguro de eliminar esto?")

    })
    it('verificar que el mensaje confirmacion al eliminar un producto tenga dos botones', () =>{        //los botones son "Si" y "Cancel"
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click()
        cy.get('.swal2-cancel').should('exist')
        cy.get('.swal2-confirm').should('exist')

    })


})