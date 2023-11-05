const cypress = require("cypress");

cypress.run({
    // Configuração para executar testes específicos no diretório cypress/e2e
    specPattern: "cypress/e2e/**/*.*",
})
    .then((results) => {
        console.log("Cypress run completed with the following results:", results);
    })
    .catch((err) => {
        console.error("An error occurred during the Cypress run:", err);
    });
