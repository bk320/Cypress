import 'cypress-file-upload';

describe('suite Crear_Producto', () => {

    it('verificar que al crear un producto sin imagen el mensaje se "No subiste ninguna imagen..."', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[2]/a/a/i").click()
        cy.get('#producto').type("Cereal Fitnes")
        cy.get('#select_categorias').select('Abarrotes')
        cy.get('#marca').type("Nestle")
        cy.get('#precio').type("23.00")
        cy.get('#descripcion').type("Un buen producto alimenticio")
        cy.get('#guardarP').click()
        cy.get('#swal2-html-container').contains("No subiste ninguna imagen...")
    })
    /*it('verificar que el archivo de fixture exista antes de subirlo', () => {
        cy.task('countFiles', 'cypress/downloads').then((count) => {})
      });*/
    it('verificar que al crear un producto ya existente de el mensaje se "Oopss"', () =>{
        cy.visit("http://micromarket.shopbarrio.online/")
        cy.xpath("/html/body/div/div/html/body/nav/div/div/ul/li[2]/a/a/i").click()
        cy.get('#producto').type("Cereal Fitness nuevo")
        cy.get('#select_categorias').select('Abarrotes')
        cy.get('#marca').type("Nestle")
        cy.get('#precio').type("23.00")
        cy.get('#descripcion').type("Un buen producto alimenticio")
        cy.get('#img-uploader').attachFile('cerealFitness.png')
        cy.reload()
        cy.get('#producto').type("Cereal Fitness nuevo")
        cy.get('#select_categorias').select('Abarrotes')
        cy.get('#marca').type("Nestle")
        cy.get('#precio').type("23.00")
        cy.get('#descripcion').type("Un buen producto alimenticio")
        cy.get('#img-uploader').attachFile('cerealFitness.png')
        cy.wait(5000)
        cy.get('#guardarP').click()
        cy.get('#swal2-title').contains("Oops...")
    })
    
})
