
describe("Check UI Elements", ()=>{
    it("Checking Radio Buttons",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //es visible el radio button
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //Seleccionar un radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    })

    it("Check Check boxes", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#monday").should('be.visible')
        //seleccionamos uno
        cy.get("input#monday").check().should('be.checked')
        //desselecionamos
        cy.get("input#monday").uncheck().should('not.be.checked')
        //seleccionamos todas las casillas
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //desselecionar todas las casillas
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        //selecionar la primera y la ultima
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })
})