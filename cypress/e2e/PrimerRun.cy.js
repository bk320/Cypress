describe('suite Eliminar_Producto', () => {
    
    it('verificar mensaje de confirmacion al eliminar un producto', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.wait(1500)
        cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click()
        cy.wait(1500)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/h2[1]").contains("¿Estas seguro de eliminar esto?")
    })
    it('verificar que el mensaje confirmacion al eliminar un producto tenga dos botones', () =>{        //los botones son "Si" y "Cancel"
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.wait(1500)
        cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click()
        cy.wait(1500)
        cy.get('.swal2-cancel').should('exist')
        cy.wait(1500)
        cy.get('.swal2-confirm').should('exist')

    })
    it('verificar que el boton volver direcione al home de la pagina', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.wait(1500)
        cy.get('#cancel').click()
        cy.wait(1500)
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/center[1]/div[1]/center[1]/img[1]").should('exist')
        cy.wait(1500)
        
    })
    it('verificar que al cancelar la eliminación de un producto, la lista esté completa', () => {
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click();
        cy.wait(1500)
        cy.xpath("/html/body/div/div/div/table/tbody/tr").then((rows) => {
          const cantidad = rows.length;
          cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click() 
          cy.wait(1500)           
          cy.get('.swal2-cancel').click();                          
          cy.wait(1500)                                                
          cy.xpath("/html/body/div/div/div/table/tbody/tr").should('have.length', cantidad);    
          cy.wait(1500)                    
        })
        cy.wait(1500)
      });
})
