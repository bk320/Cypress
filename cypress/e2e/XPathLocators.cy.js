

describe('XPathLocators', () =>{
    it('Google Color', () =>{
        cy.visit("https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1SQJL_esBO843BO843&oq=ggo&aqs=chrome.2.69i57j69i64j46i10i131i199i433i465i512j0i10i131i433i512l5.1948j0j7&sourceid=chrome&ie=UTF-8")
    })
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