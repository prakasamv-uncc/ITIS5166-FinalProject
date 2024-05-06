describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })
})

describe('template spec', () => {
  it('passes', () => {
     cy
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('password1')
    cy.get('button[type="submit"]').click()
   // cy.url().should('include', '/dashboard')
  });

  it('fails', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type('your_username')
    cy.get('input[name="password"]').type('wrong_password')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/login')
  });

  it('passes', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('password1')
    cy.get('input[name="confirmPassword"]').type('password1')
    cy.get('button[type="submit"]').click()

    //cy.url().should('include', '/login')
  });

  it('passes', () => {
    cy.visit('http://localhost:4200/dashboard')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/login')
  });

});

