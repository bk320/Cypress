import 'cypress-file-upload';

describe("Upload pruebas",(()=>{
    it('subir archivo',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('cerealFitness.png')
        cy.get('#file-submit').click()
        cy.wait(5000)
    })
}))