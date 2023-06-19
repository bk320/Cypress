
describe("Assertions demo", ()=>{
    it("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should    and 
        //cy.url().should('include','orangehrmlive.com')  //verificamos que este fragmento se incluya en el url
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrmlive')      //verificamos que este texto este en la url

        /*cy.url().should('include','orangehrmlive.com')  
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive')*/

        cy.url().should('include','orangehrmlive.com')  
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','orangssehrmlive')

        cy.title().should('include','Orange')      
        .and('eq',"OrangeHRM")                  
        .and('contain',"HRM")
        

        cy.get('.orangehrm-login-branding > img').should('be.visible')           //logo visible
        .and('exist')                                                                //logo existe

        cy.xpath("//a").should('have.length','5')       //numero de links

        cy.get("input[placeholder='Nombre de usuario']").type("Admin")                  //valor corecto
        cy.get("input[placeholder='Nombre de usuario']").should('have.value','Admin')  

    })
    it("Explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Nombre de usuario']").type("Admin")
        cy.get("input[placeholder='Contraseña']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Paul Collings";
        let expName2="Paul Collings222";

        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actName=x.text()

            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName2)

            //TDD style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName2)
        })

    })
})