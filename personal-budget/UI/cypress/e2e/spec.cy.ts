describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('template spec', () => {
  it('passes', () => {
     cy
    cy.visit('https://example.cypress.io/login')
    cy.get('input[name="username"]').type('your_username')
    cy.get('input[name="password"]').type('your_password')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  });

  it('fails', () => {
    cy.visit('https://example.cypress.io/login')
    cy.get('input[name="username"]').type('your_username')
    cy.get('input[name="password"]').type('wrong_password')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/login')
  })
});

