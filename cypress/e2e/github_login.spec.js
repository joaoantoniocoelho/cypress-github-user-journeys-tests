describe('GitHub Repository Management Workflow', () => {
    it('Logs in with valid credentials', () => {
        cy.visit('https://github.com/login');

        cy.get('input[name="login"]').type(Cypress.env('GITHUB_USERNAME'));
        cy.get('input[name="password"]').type(Cypress.env('GITHUB_PASSWORD'));
        cy.get('input[name="commit"]').click();

        cy.get('body').should('have.class', 'logged-in');
    });

    it('Navigates to Create New Repository Page after login', () => {
        cy.visit('https://github.com/login');

        cy.get('input[name="login"]').type(Cypress.env('GITHUB_USERNAME'));
        cy.get('input[name="password"]').type(Cypress.env('GITHUB_PASSWORD'));
        cy.get('input[name="commit"]').click();
        cy.get('.dashboard-sidebar').find('a[href="/new"]').should('be.visible').click();
        cy.get('form h1').should('have.text', 'Create a new repository');
    });

    it('Edit profile must be visible on logged user profile', () => {
        cy.visit('https://github.com/login');

        cy.get('input[name="login"]').type(Cypress.env('GITHUB_USERNAME'));
        cy.get('input[name="password"]').type(Cypress.env('GITHUB_PASSWORD'));
        cy.get('input[name="commit"]').click();

        cy.visit(`https://github.com/${Cypress.env('GITHUB_USERNAME')}`);
        cy.get('.js-profile-editable-area').find('button').contains('Edit profile').should('be.visible');
    });
});
