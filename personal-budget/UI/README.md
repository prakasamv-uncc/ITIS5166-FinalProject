/**
 * @file README.md
 * @description User Interface (UI) documentation for the Personal Budget project.
 * 
 * This project was generated with Angular CLI version 17.1.0.
 * 
 * @see {@link https://github.com/angular/angular-cli} for more information about Angular CLI.
 * 
 * @section Development server
 * 
 * Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
 * 
 * @section Code scaffolding
 * 
 * Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
 * 
 * @section Build
 * 
 * Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
 * 
 * @section Running unit tests
 * 
 * Run `ng test` to execute the unit tests via Karma. 
 * 
 * @see {@link https://karma-runner.github.io} for more information about Karma.
 * 
 * @section Running end-to-end tests
 * 
 * Run `npm run cypress:open` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
 * 
 * @section Further help
 * 
 * To get more help on the Angular CLI use `ng help` or go check out the Angular CLI Overview and Command Reference page at {@link https://angular.io/cli}.
 */
# UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## API Documentation
The application provides the following endpoints:

# Auth
POST /v1/auth/register: Register as user
POST /v1/auth/login: Login
POST /v1/auth/logout: Logout
POST /v1/auth/refresh-tokens: Refresh auth tokens
POST /v1/auth/forgot-password: Forgot password
POST /v1/auth/reset-password: Reset password
POST /v1/auth/send-verification-email: Send verification email
POST /v1/auth/verify-email: Verify email

# Budgets
POST /api/budgets: Create a new budget
GET /api/budgets: Get all budgets
GET /api/budgets/{budgetId}: Get a budget by ID
PUT /api/budgets/{budgetId}: Update a budget by ID
DELETE /api/budgets/{budgetId}: Delete a budget by ID

# Expenses
POST /v1/expenses: Create a new expense
GET /v1/expenses: Get all expenses
GET /v1/expenses/{expenseId}: Get an expense by ID
PATCH /v1/expenses/{expenseId}: Update an expense by ID
DELETE /v1/expenses/{expenseId}: Delete an expense by ID
POST /v1/expenses/getMonthTotalExpense/{year}/{month}: Get total expenses for a month

# Incomes
POST /incomes: Create a new income
GET /incomes: Get all incomes
GET /api/incomes/{incomeId}: Get an income by ID
PUT /api/incomes/{incomeId}: Update an income by ID
DELETE /api/incomes/{incomeId}: Delete an income by ID

# IncompleteForms
POST /api/incompleteForms: Create a new incomplete form
GET /api/incompleteForms: Get all incomplete forms

# Users
POST /users: Create a user
GET /users: Get all users
GET /users/{id}: Get a user
PATCH /users/{id}: Update a user
DELETE /users/{id}: Delete a user


## Running the tests

## Cypress E2E (Applitools)
** Install Cypress
Install Cypress:

Explain how to run the automated tests for this system.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
