describe("Filtrado Detallado de Residencias", () => {
///////--------------------------------1-------------------------------/////////////////////// 
    it("Verificar disponibilidad de residencias con amplias capacidades a un rango de precios moderado", () => {
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }
        })
        cy.wait(4000)
        cy.get('.b1prp6wh').click();
        cy.wait(4000)
        cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
        cy.wait(4000)
        // Ingresa el texto "2300" en el campo #price_filter_min
        cy.get('#price_filter_max').clear().type('2300');
        cy.wait(4000);
        cy.get('#price_filter_min').clear().type('2200');
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
            cy.scrollTo('bottom', { duration: 5000 }); // Duración de 5 segundos
            cy.wait(4000); // Esperar un momento después del desplazamiento

            // Verificar el número de cards
            cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
        });
    })

///////--------------------------------2-------------------------------///////////////////////   
    
    it("Verificar disponibilidad de residencias con especificaciones de habitaciones y camas en un rango de precios específico", () => {
    cy.visit('https://www.airbnb.com.bo/', {
        headers: {
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "axios/0.18.0"
        }
    })
    cy.wait(4000)
    cy.get('.b1prp6wh').click();
    cy.wait(4000)
    //7 habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-7"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //8+ camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    // +8 banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    // Ingresa el texto "2000" en el campo #price_filter_min
    cy.get('#price_filter_max').clear().type('2000');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('1900');
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
        cy.scrollTo('bottom', { duration: 5000 }); // Duración de 5 segundos
        cy.wait(4000); // Esperar un momento después del desplazamiento

        // Verificar el número de cards
        cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
    });
})

///////------------------------------3---------------------------------///////////////////////   
    
    it("Verificar disponibilidad de habitaciones en un rango de precios elevado sin restricciones de especificaciones", () => {
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }
        });
        
        cy.wait(4000);
        cy.get('.b1prp6wh').click();
        cy.wait(4000);
        //click habitacion
        cy.get('#tab--tabs--1').click();
        cy.wait(4000);
        cy.get('#price_filter_max').clear().type('8000');
        cy.wait(4000);
        cy.get('#price_filter_min').clear().type('7000');
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

            // Verificar el número de cards
            cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
        });
    });


///////--------------------------------4-------------------------------///////////////////////
    it("Verificar disponibilidad de habitaciones con especificaciones mínimas a un rango de precios accesible", () => {
    cy.visit('https://www.airbnb.com.bo/', {
        headers: {
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "axios/0.18.0"
        }
    });
    
    cy.wait(4000);
    cy.get('.b1prp6wh').click();
    cy.wait(4000);
    //click habitacion
    cy.get('#tab--tabs--1').click();
    cy.wait(4000);
    //3 habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-3"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //2 camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-2"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //1 banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-1"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    cy.get('#price_filter_max').clear().type('2000');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('1000');
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

///////-------------------------------5--------------------------------///////////////////////

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

///////-------------------------------6--------------------------------///////////////////////

    it("Verificar disponibilidad de alojamientos completos con capacidad limitada a un rango de precios alto", () => {
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
    //1 habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-1"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //4 camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-4"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //8+ banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    cy.get('#price_filter_max').clear().type('4000');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('3500');
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

///////-------------------------------7--------------------------------///////////////////////

    it("Verificar disponibilidad de residencias con una mezcla única de habitaciones, camas y baños en un rango de precios alto", () => {
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
    //cy.get('#tab--tabs--2').click();
    //cy.wait(4000);
    //3 habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-3"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //1 camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-1"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //6 banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-6"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    cy.get('#price_filter_max').clear().type('4000');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('3800');
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

        // Verificar el número de cards
        cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
    });
});

///////-------------------------------8--------------------------------///////////////////////

    it("Verificar disponibilidad de habitaciones de alta capacidad en un rango de precios muy elevado", () => {
    cy.visit('https://www.airbnb.com.bo/', {
        headers: {
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "axios/0.18.0"
        }
    });
    
    cy.wait(4000);
    cy.get('.b1prp6wh').click();
    cy.wait(4000);
    //click habitacion
    cy.get('#tab--tabs--1').click();
    cy.wait(4000);
    //8+ habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //8+ camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //8+ banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-8+"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    cy.get('#price_filter_max').clear().type('4800');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('4700');
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

        // Verificar el número de cards
        cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
    });
});

///////-------------------------------9--------------------------------///////////////////////

    it("Verificar disponibilidad de residencias con capacidades medias a un rango de precios muy alto", () => {
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
    //4 habitaciones
    cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-4"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //7camas
    cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-7"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    //7 banios
    cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-7"] > .c1c8ai4a > .t15sb9tj').click();
    cy.wait(4000)
    cy.get('#price_filter_max').clear().type('12000');
    cy.wait(4000);
    cy.get('#price_filter_min').clear().type('10000');
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

        // Verificar el número de cards
        cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
    });
});


///////-------------------------------10--------------------------------///////////////////////

    it("Verificar número de cards según el texto del botón", () => {
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }
        });

        cy.wait(4000);
        cy.get('.b1prp6wh').click();
        cy.wait(4000);
        cy.get('#tab--tabs--1').click(); // Cambiar a la pestaña de habitaciones
        cy.wait(4000);
        cy.get(':nth-child(1) > .p13xb689 > [data-testid="menuItemButton-1"] > .c1c8ai4a > .t15sb9tj').click(); // Seleccionar 1 habitación
        cy.wait(4000);
        cy.get(':nth-child(2) > .p13xb689 > [data-testid="menuItemButton-4"] > .c1c8ai4a > .t15sb9tj').click(); // Seleccionar 4 camas
        cy.wait(4000);
        cy.get(':nth-child(3) > .p13xb689 > [data-testid="menuItemButton-1"] > .c1c8ai4a > .t15sb9tj').click(); // Seleccionar 1 baño
        cy.wait(4000);
        cy.get('#price_filter_max').clear().type('20000');
        cy.wait(4000);
        cy.get('#price_filter_min').clear().type('18000');
        cy.wait(4000);
        cy.get('.t1nlugab').click(); // Aplicar filtros
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

            // Verificar el número de cards
            cy.get('.bn2bl2p').should('have.length', numToShow); // Clase que identifica las cards
        });
    });

});
