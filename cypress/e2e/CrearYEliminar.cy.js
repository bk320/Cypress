import 'cypress-file-upload';

describe('Verificar mensajes al Crear_Producto_y_Eliminar', () => {
    it('verificar que al crear un producto de el mensaje de exito "¡Genial!"', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[2]/a/a/i").click()
        cy.reload()
        cy.get('#producto').type("Cereal Fitness nuevo")
        cy.wait(1000)
        cy.get('#select_categorias').select('Abarrotes')
        cy.wait(1000)
        cy.get('#marca').type("Nestle")
        cy.wait(1000)
        cy.get('#precio').type("23.00")
        cy.wait(1000)
        cy.get('#descripcion').type("Un buen producto alimenticio")
        cy.wait(1000)
        cy.get('#img-uploader').attachFile('cerealFitness.png')
        cy.wait(5000)
        cy.get('#guardarP').click()
        cy.wait(1500)
        cy.get('#swal2-title').contains("¡Genial!")
    })
    it('verificar que al eliminar un producto la lista se actualize', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.wait(1500)
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[3]/a/a/i").click() 
        cy.wait(1500)
        cy.xpath("/html/body/div/div/div/table/tbody/tr").then((rows) => {
          const cantidadInicial = rows.length;
          cy.xpath("/html//body[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/th[3]/button[1]").click()  
          cy.wait(1500)
          cy.get(".swal2-confirm").click();
          cy.wait(1500)
          cy.get('.swal2-confirm').click();
          cy.wait(1500)
          cy.xpath("/html/body/div/div/div/table/tbody/tr").should('have.length', cantidadInicial - 1)
          cy.xpath("//th[text()='Cereal Fitness nuevo']").should('not.exist');
        
        })
    })


})