const cypress = require("cypress");

cypress.run({
    // Configuração para executar testes específicos no diretório cypress/e2e
    specPattern: "cypress/e2e/**/*.*",
})
    .then(() => {

    })
    .catch((err) => {
        console.error("An error occurred during the Cypress run:", err);
    })
    .finally(() => {
        console.log("End of tests execution");
    })
