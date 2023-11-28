/// <reference types="Cypress" />

describe('CSSLocators', () =>{
    it("csslocators", () =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        /*cy.get("#search_query_top").type("T-Shirts")    //usando el id es opcional
        cy.get("[name='submit_search']").click()        //usando el nombre del atributo
        cy.get(".lighter").contains("T-Shirts")         //usando la */
    })
})