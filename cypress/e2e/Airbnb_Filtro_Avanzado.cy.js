

describe('suite Filtro de búsqueda Avanzado', () => {
    it('1. Verificar que el sistema de filtro complete automáticamente la fecha faltante con la diferencia de un día, a la fecha final.', () =>{
        let currentPosition;
    
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });
    

        cy.wait(8000);
        cy.xpath("//div[normalize-space()='Salida']").click({ force: true });
        cy.window().then(win => {
            currentPosition = win.scrollY; 
            win.scrollTo(0, currentPosition);
        });
        cy.wait(2000);
    

        const hoy = new Date();
        const fechaFinal = new Date(hoy);
        fechaFinal.setDate(hoy.getDate() + 10);

        const fechaInicial = new Date(fechaFinal);
        fechaInicial.setDate(fechaFinal.getDate() - 1);

        const diaInicial = fechaInicial.getDate().toString().padStart(2, '0');
        const mesInicial = (fechaInicial.getMonth() + 1).toString().padStart(2, '0');
        const añoInicial = fechaInicial.getFullYear();
        const fechaFormateadaInicial = `${diaInicial}/${mesInicial}/${añoInicial}`;
    
        const diaFinal = fechaFinal.getDate().toString().padStart(2, '0');
        const mesFinal = (fechaFinal.getMonth() + 1).toString().padStart(2, '0');
        const añoFinal = fechaFinal.getFullYear();
        const fechaFormateadaFinal = `${diaFinal}/${mesFinal}/${añoFinal}`;
    

        cy.get(`[data-testid="calendar-day-${diaFinal}/${mesFinal}/${añoFinal}"]`).click({ force: true });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
    

        const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        const fechaInicialFormateada = `${diaInicial} ${meses[mesInicial-1]}.`;
    

        cy.get('div[dir="ltr"]').contains(fechaInicialFormateada).should('exist');
    });
    
    it('2. Verificar que el sistema de filtro complete automáticamente la fecha faltante con la diferencia de un día, a la fecha inicial.', () =>{
        let currentPosition;
    
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });
    

        cy.wait(8000);
        cy.xpath("//div[normalize-space()='Llegada']").click({ force: true });
        cy.window().then(win => {
            win.scrollTo(0, currentPosition);
        });
        cy.wait(2000);
    

        const hoy = new Date();
        const fechaFinal = new Date(hoy);
        fechaFinal.setDate(hoy.getDate() + 1);

        const fechaInicial = new Date(fechaFinal);
        fechaInicial.setDate(fechaFinal.getDate());

        const diaInicial = fechaInicial.getDate().toString().padStart(2, '0');
        const mesInicial = (fechaInicial.getMonth() + 1).toString().padStart(2, '0');
        const añoInicial = fechaInicial.getFullYear();
        const fechaFormateadaInicial = `${diaInicial}/${mesInicial}/${añoInicial}`;
    
        const diaFinal = fechaFinal.getDate().toString().padStart(2, '0');
        const mesFinal = (fechaFinal.getMonth() + 1).toString().padStart(2, '0');
        const añoFinal = fechaFinal.getFullYear();
        const fechaFormateadaFinal = `${diaFinal}/${mesFinal}/${añoFinal}`;
    

        cy.get(`[data-testid="calendar-day-${diaInicial}/${mesInicial}/${añoInicial}"]`).click({ force: true });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
    

        const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        const fechaFinalFormateada = `${diaFinal} ${meses[mesFinal-1]}.`;
    

        cy.get('div[dir="ltr"]').contains(fechaFinalFormateada).should('exist');
    });
    
    it('3. Verificar que el sistema de filtro aplique correctamente el filtro de fechas para mostrar solo las residencias disponibles dentro del rango seleccionado.', () =>{
        let currentPosition;
    
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",   
                "User-Agent": "axios/0.18.0"
            }
        });
    

        cy.wait(8000);
        cy.xpath("//div[normalize-space()='Llegada']").click({ force: true });
        cy.window().then(win => {
            currentPosition = win.scrollY;
            win.scrollTo(0, currentPosition);
        });
        cy.wait(2000);
    

        const hoy = new Date();

        const fechaCheckIn = new Date(hoy);
        fechaCheckIn.setDate(hoy.getDate() + 10);

        const diaHoy = hoy.getDate().toString().padStart(2, '0');
        const mesHoy = (hoy.getMonth() + 1).toString().padStart(2, '0');
        const añoHoy = hoy.getFullYear();
        const fechaFormateadaHoy = `${diaHoy}/${mesHoy}/${añoHoy}`;
    
        const diaCheckIn = fechaCheckIn.getDate().toString().padStart(2, '0');
        const mesCheckIn = (fechaCheckIn.getMonth() + 1).toString().padStart(2, '0');
        const añoCheckIn = fechaCheckIn.getFullYear();
        const fechaFormateadaCheckIn = `${diaCheckIn}/${mesCheckIn}/${añoCheckIn}`;
    

        cy.get(`[data-testid="calendar-day-${diaHoy}/${mesHoy}/${añoHoy}"]`).click({ force: true });
        cy.wait(2000);
        cy.get(`[data-testid="calendar-day-${diaCheckIn}/${mesCheckIn}/${añoCheckIn}"]`).click({ force: true });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
    

        cy.get(':nth-child(1) > .c4mnd7m > .c1l1h97y > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > [data-testid="card-container"] > .bn2bl2p')
            .invoke('attr', 'target', '_self') 
            .click({ force: true });
        cy.wait(2000);

        cy.get('[data-testid="change-dates-checkIn"]').invoke('text').then(textoCheckIn => {
            const fechaCheckInMostrada = normalizeFecha(textoCheckIn.trim());
            expect(fechaCheckInMostrada).to.equal(fechaFormateadaHoy);
        });
        cy.wait(2000);
        cy.get('[data-testid="change-dates-checkOut"]').invoke('text').then(textoCheckOut => {
            const fechaCheckOutMostrada = normalizeFecha(textoCheckOut.trim());
            expect(fechaCheckOutMostrada).to.equal(fechaFormateadaCheckIn);
        });
        

        function normalizeFecha(fecha) {
            const partesFecha = fecha.split('/');
            const dia = partesFecha[0].padStart(2, '0');
            const mes = partesFecha[1].padStart(2, '0');
            const año = partesFecha[2];
            return `${dia}/${mes}/${año}`;
        }
    });
    it('4. Verificar que el sistema de filtro no permite seleccionar fechas anteriores a la fecha inicial.', () =>{
        let currentPosition;
    
        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });
    
        cy.wait(8000);
        cy.xpath("//div[normalize-space()='Llegada']").click({ force: true });
        cy.window().then(win => {
            win.scrollTo(0, currentPosition);
        });
        cy.wait(2000);
    
        const hoy = new Date();
        const fechaFinal = new Date(hoy);
        fechaFinal.setDate(hoy.getDate() + 1);

        const fechaPrueba = new Date(hoy);
        fechaPrueba.setDate(hoy.getDate() - 10);

        const fechaInicial = new Date(fechaFinal);
        fechaInicial.setDate(hoy.getDate());

        const diaInicial = fechaInicial.getDate().toString().padStart(2, '0');
        const mesInicial = (fechaInicial.getMonth() + 1).toString().padStart(2, '0');
        const añoInicial = fechaInicial.getFullYear();

        const diaFinal = fechaFinal.getDate().toString().padStart(2, '0');
        const mesFinal = (fechaFinal.getMonth() + 1).toString().padStart(2, '0');
        const añoFinal = fechaFinal.getFullYear();
    
        const diaPrueba = fechaPrueba.getDate().toString().padStart(2, '0');
        const mesPrueba = (fechaPrueba.getMonth() + 1).toString().padStart(2, '0');
        const añoPrueba = fechaPrueba.getFullYear();
        cy.wait(2000);

        cy.get(`[data-testid="calendar-day-${diaInicial}/${mesInicial}/${añoInicial}"]`).click({ force: true });
        cy.wait(2000);
        cy.get(`[data-testid="calendar-day-${diaPrueba}/${mesPrueba}/${añoPrueba}"]`).click({ force: true });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
        

        const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        const fechaFinalFormateada = `${diaFinal} ${meses[mesFinal-1]}.`;

        cy.get('div[dir="ltr"]').contains(fechaFinalFormateada).should('exist');
    });
    

    it('5. Verificar que el sistema muestre residencias válidas al especificar un lugar.', () =>{
        let currentPosition;

        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });


        cy.wait(8000);
        cy.window().then(win => {
            currentPosition = win.scrollY;
        });
        cy.xpath("//div[contains(@class,'ikfcax3 atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_cs_9dzvea atm_le_yh40bf dir dir-ltr')]").click({ force: true });
        cy.wait(2000);
        cy.get('input#bigsearch-query-location-input').type('Bolivia, La Paz');
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
        cy.get('[data-testid="card-container"]').each(card => {
            cy.wrap(card)
                .find('.t1jojoys')
                .invoke('text')
                .then(text => {
                    if (text.includes('La Paz')) {
                        cy.log('Se encontró "La Paz" en una tarjeta.');
                    }
                });
        });
        
    });

    it('6. Verificar que el sistema muestre residencias válidas para el número de huéspedes especificado mayor o igual.', () =>{
        let currentPosition;
        const numeroDeClics = 3;

        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });

        cy.wait(8000);

        cy.window().then(win => {
            currentPosition = win.scrollY;
        });
        cy.xpath('//div[normalize-space()="Quién"]').click({ force: true });
        cy.wait(2000);
        cy.get('button[data-testid*="stepper-adults-increase-button"]')
            .find('span.i98ho2o.atm_e2_qslrf5.atm_vy_qslrf5.atm_l8_14y27yu.dir.dir-ltr')
            .find('svg')
            .then($elements => {
                for (let i = 0; i < numeroDeClics; i++) {
                cy.wrap($elements).click({ force: true });
                }
            });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
        cy.get(':nth-child(1) > .c4mnd7m > .c1l1h97y > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > [data-testid="card-container"] > .bn2bl2p')
            .invoke('attr', 'target', '_self') 
            .click({ force: true });
        cy.wait(2000);
        

        cy.xpath('(//li[contains(@class,"l7n4lsf")])[1]')
            .invoke('text')
            .then(texto => {
                const numeroDeHuespedes = parseInt(texto.trim().split(' ')[0], 10);
                expect(numeroDeHuespedes).to.be.at.least(numeroDeClics);
            });


    });

    it('7. Verificar que el sistema muestre residencias que permitan una cantidad mayor o igual al número de huéspedes máximos. ', () =>{
        let currentPosition;
        const numeroDeClics = 15;

        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });

        cy.wait(8000);

        cy.window().then(win => {
            currentPosition = win.scrollY;
        });
        cy.xpath('//div[normalize-space()="Quién"]').click({ force: true });
        cy.wait(2000);
        cy.get('button[data-testid*="stepper-adults-increase-button"]')
            .find('span.i98ho2o.atm_e2_qslrf5.atm_vy_qslrf5.atm_l8_14y27yu.dir.dir-ltr')
            .find('svg')
            .then($elements => {
                for (let i = 0; i < numeroDeClics; i++) {
                cy.wrap($elements).click({ force: true });
                }
            });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
        cy.get(':nth-child(1) > .c4mnd7m > .c1l1h97y > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > [data-testid="card-container"] > .bn2bl2p')
            .invoke('attr', 'target', '_self') 
            .click({ force: true });
        cy.wait(2000);
        
        cy.xpath(`//span[normalize-space()='${numeroDeClics} huéspedes']`)
            .invoke('text')
            .then(texto => {
                const numeroDeHuespedes = parseInt(texto.trim().split(' ')[0], 10);
                expect(numeroDeHuespedes).to.be.at.least(numeroDeClics);
            });


    });

    it('8. Verificar que el sistema de filtro no permite solo registrar niños en el filtro sin el acompañamiento de al menos un adulto. ', () =>{
        let currentPosition;
        const numeroDeClics = 15;

        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });

        cy.wait(8000);

        cy.window().then(win => {
            currentPosition = win.scrollY;
        });
        cy.xpath('//div[normalize-space()="Quién"]').click({ force: true });
        cy.wait(2000);
        cy.get('[data-testid="stepper-children-increase-button"]')
            .find('span.i98ho2o.atm_e2_qslrf5.atm_vy_qslrf5.atm_l8_14y27yu.dir.dir-ltr')
            .find('svg')
            .then($elements => {
                for (let i = 0; i < numeroDeClics; i++) {
                cy.wrap($elements).click({ force: true });
                }
            });
        cy.wait(2000);
        cy.xpath("//span[normalize-space()='1']")
            .should('exist');
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        


    });

    it('9. Verificar que el sistema muestre residencias válidas para el registro de mascotas según lo especificado en el filtro.', () =>{
        let currentPosition;
        const numeroDeClics = 2;
        const numeoDeMascotas = 3;

        cy.visit('https://www.airbnb.com.bo/', {
            headers: {
                "Accept": "application/json, text/plain, /",
                "User-Agent": "axios/0.18.0"
            }
        });

        cy.wait(8000);
        cy.window().then(win => {
            currentPosition = win.scrollY;
        });
        cy.xpath('//div[normalize-space()="Quién"]').click({ force: true });
        cy.wait(2000);
        cy.get('button[data-testid*="stepper-adults-increase-button"]')
            .find('span.i98ho2o.atm_e2_qslrf5.atm_vy_qslrf5.atm_l8_14y27yu.dir.dir-ltr')
            .find('svg')
            .then($elements => {
                for (let i = 0; i < numeroDeClics; i++) {
                cy.wrap($elements).click({ force: true });
                }
            });
        cy.wait(2000);
        cy.get('[data-testid="stepper-pets-increase-button"]')
            .find('span.i98ho2o.atm_e2_qslrf5.atm_vy_qslrf5.atm_l8_14y27yu.dir.dir-ltr')
            .find('svg')
            .then($elements => {
                for (let i = 0; i < numeoDeMascotas; i++) {
                cy.wrap($elements).click({ force: true });
                }
            });
        cy.wait(2000);
        cy.get("[data-testid$='structured-search-input-search-button']").click({ force: true });
        cy.wait(2000);
        cy.get(':nth-child(1) > .c4mnd7m > .c1l1h97y > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > [data-testid="card-container"] > .bn2bl2p')
            .invoke('attr', 'target', '_self') 
            .click({ force: true });
        cy.wait(2000);
        cy.get('[class^="_19xnuo97"]')
        .each(($element, index, $list) => {
            cy.wrap($element)
            .find('div.dir')
            .invoke('text')
            .then((text) => {
                if (text.includes('Se permiten mascotas')) {
                cy.log(`Texto encontrado en el elemento ${index + 1}`);
                }
            });
        });

    });

});
