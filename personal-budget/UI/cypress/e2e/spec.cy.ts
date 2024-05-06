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

 /*  it('passes', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('password1')
    cy.get('input[name="confirmPassword"]').type('password1')
    cy.get('button[type="submit"]').click()

    //cy.url().should('include', '/login')
  });
 */

  it('Should navigate through steps in registration', () => {
    cy.visit('http://localhost:4200/register')
    // Fill out the registration form
    cy.get('input[name="name"]').type('TestUser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('test123');
    cy.get('input[name="confirmPassword"]').type('test123');

    // Click the 'Next' button
    cy.get('button[color="primary"]').contains('Next').click();

    // Verify the second step label
    cy.contains('Fill out your Initial Income').should('exist');

    // Fill out the second step form
    cy.get('input[name="incomeType"]').type('Salary');
    cy.get('input[name="amount"]').type('5000');
    cy.get('input[name="date"]').type('2022-05-10'); // Adjust the date format as needed
    cy.get('select[name="category"]').select('1'); // Assuming '1' is the value for the desired category
    cy.get('input[name="city"]').type('New York');
    cy.get('select[name="state"]').select('1'); // Assuming '1' is the value for the desired state
    cy.get('select[name="country"]').select('1'); // Assuming '1' is the value for the desired country
    cy.get('textarea[name="description"]').type('Initial income description');

    // Click the 'Next' button on the second step
    cy.get('button[color="primary"]').contains('Next').click();

    // Verify the third step label
    cy.contains('Fill out your Initial Budget').should('exist');

    // Fill out the third step form
    cy.get('input[name="budgetType"]').type('Monthly Budget');
    cy.get('input[name="amount"]').type('3000');
    cy.get('input[name="date"]').type('2022-05-15'); // Adjust the date format as needed
    cy.get('select[name="category"]').select('1'); // Assuming '1' is the value for the desired category
    cy.get('input[name="city"]').type('Los Angeles');
    cy.get('select[name="state"]').select('1'); // Assuming '1' is the value for the desired state
    cy.get('select[name="country"]').select('1'); // Assuming '1' is the value for the desired country
    cy.get('textarea[name="description"]').type('Initial budget description');

    // Click the 'Next' button on the third step
    cy.get('button[color="primary"]').contains('Next').click();

    // Verify the 'Done' step label after completing registration
    cy.contains('You are now registered!').should('exist');
  });

});

