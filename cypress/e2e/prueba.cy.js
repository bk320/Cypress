import 'cypress-file-upload';

describe("Prueba Treinta",(()=>{
    it('Verificar el acceso a la app',()=>{
        cy.visit('https://login.treinta.co/')
        cy.wait(5000)
    })
}))