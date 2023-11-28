const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  projectId: 'yh1bzy',
  reporter: 'cypress-mochawesome-reporter',
  //defaultCommandTimeout: 3000,
  viewportWidth: 1400,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser, launchOptions) => {
        // supply the absolute path to an unpacked extension's folder
        // NOTE: extensions cannot be loaded in headless Chrome
        launchOptions.extensions.push('C:/Users/Richard/AppData/Local/Google/Chrome/User Data/Profile 7/Extensions/mjhpgnbimicffchbodmgfnemoghjakai/0.2.3_0')
        
        return launchOptions

      })
    }
    
  },
})