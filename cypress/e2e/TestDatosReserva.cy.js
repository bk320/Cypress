import 'cypress-file-upload';

describe('Evaluar los datos de Reserva',  () => {
    
    it('Verificar que el rango de fechas de entrada(7/05/2024) y salida(15/05/2024) sea válida', async () =>{
        await cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        await cy.wait(5500) 
        await cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-07#availability-calendar', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        await cy.wait(5500)
        await cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-07&check_out=2024-05-15', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        await cy.wait(10000) 
    })  
    it('Verificar que el rango de fechas de entrada(16/05/2024) y salida(24/05/2024) sea inválida', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
            headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        
        cy.wait(4500) 
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-16#availability-calendar', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-16&check_out=2024-05-24', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(10000)     
    })
    it('Verificar que el rango de fechas de entrada(06/05/2024) y salida(02/05/2024) sea inválida', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500) 
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-06#availability-calendar', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4&check_in=2024-05-06&check_out=2024-05-02', {
                    headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(10000)
    })
	it('Verificar que el número de huéspedes 5 sea Válido', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)  
        cy.get('#GuestPicker-book_it-trigger').click({ force: true });
        cy.wait(1500) 
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.wait(10000)
    })
    it('Verificar que el número de huéspedes 8 sea inválido', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)  
        cy.get('#GuestPicker-book_it-trigger').click({ force: true });
        cy.wait(1500) 
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.wait(10000)
    })
    it('Verificar que el número de huéspedes 0 sea inválido', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)  
        cy.get('#GuestPicker-book_it-trigger').click({ force: true });
        cy.wait(1500) 
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.wait(10000)
    })
    it('Verificar que el límite inferior 1 del número de huéspedes sea válido', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)  
        cy.get('#GuestPicker-book_it-trigger').click({ force: true });
        cy.wait(1500) 
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.wait(10000)
    })
    it('Verificar que el límite superior 7 del número de huéspedes sea válido.', () =>{
        cy.visit('https://www.airbnb.com.bo/rooms/33996825?adults=2&category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1125564886&search_mode=flex_destinations_search&source_impression_id=p3_1712800884_wUQZCxBnDdHvS5Qn&previous_page_section_name=1000&federated_search_id=d4201580-edbd-4178-872a-a3db2f77b786&guests=6&children=4', {
                headers: {
                        "Accept": "application/json, text/plain, /",
                        "User-Agent": "axios/0.18.0"
                    }
                })
        cy.wait(4500)  
        cy.get('#GuestPicker-book_it-trigger').click({ force: true });
        cy.wait(1500) 
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"] > .i98ho2o').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.get('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]').click({ force: true });
        cy.wait(10000)
    })
})
