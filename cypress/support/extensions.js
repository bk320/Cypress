before(() => {
    cy.readFile('extensions/Cross-DomainCORS.crx', 'base64').then(extension => {
      cy.visit('chrome://extensions/')
        .then(() => {
          cy.get('extensions-manager')
            .shadow()
            .find('extensions-item')
            .shadow()
            .find('#load-unpacked-button')
            .click({ force: true })
            .then(() => {
              cy.get('extensions-manager')
                .shadow()
                .find('extensions-item')
                .shadow()
                .find('input[type="file"]')
                .attachFile({ fileContent: extension, fileName: 'Cross-DomainCORS.crx', mimeType: 'application/x-chrome-extension' });
            });
        });
    });
  });