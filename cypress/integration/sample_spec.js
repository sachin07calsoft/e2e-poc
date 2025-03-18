// cypress/integration/sample_spec.js
describe('Home page', () => {
  it('should display the welcome message', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to My Website');
  });
});
