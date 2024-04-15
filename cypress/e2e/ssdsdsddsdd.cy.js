describe("Filtrado Detallado de Residencias", () => {

    it("Verificar disponibilidad de alojamientos completos con capacidades medias a un rango de precios elevado", () => {
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }
        });
        
        cy.wait(4000);
        cy.get('.b1prp6wh').click();
        cy.wait(4000);
        //click alojamiento entero
        cy.get('#tab--tabs--2').click();
        cy.wait(4000);
        //5 habitaciones
        cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-5"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        //6 camas
        cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-6"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        //7 banios
        cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-7"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        cy.get('#price_filter_max').clear().type('2700');
        cy.wait(4000);
        cy.get('#price_filter_min').clear().type('2500');
        cy.wait(4000);
        cy.get('.t1nlugab').click();
        cy.wait(4000);
        
        // Obtener el texto del botón antes de hacer clic
        cy.get('.bmx2gr4').invoke('text').then((text) => {
            let numToShow = 0;
            if (text.includes('No hay coincidencias exactas')) {
                cy.log('No hay coincidencias exactas');
                // No se muestran cards, numToShow ya es 0
            } else {
                numToShow = parseInt(text.match(/\d+/)[0]); // Extraer el número del texto
                cy.log(`Número extraído: ${numToShow}`);
            }
    
            // Hacer clic en el botón después de obtener el texto
            cy.get('.bmx2gr4').click();
            cy.wait(4000);
    
            // Desplazarse hasta el final de la página de forma lenta
            cy.scrollTo('bottom', { duration: 4000 }); // Duración de 4 segundos
            cy.wait(4000); // Esperar un momento después del desplazamiento
    
            // Verificar el número de cards
            cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
        });
    });


});
