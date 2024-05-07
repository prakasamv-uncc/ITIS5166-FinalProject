# Final Project: 202410-Spring 2024-ITIS-5166-051:ITIS-5166-081_Combined-Network-based Application Development - Personal Budget Planner
# Personal Budget Application

This is a full-stack web application for managing personal budgets. The application is built using Angular 17 on the frontend, Node.js and Express on the backend, and MongoDB as the database. It includes Cypress for end-to-end testing and Karma for unit testing.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Testing](#testing)
  - [End-to-End Testing](#end-to-end-testing)
  - [Unit Testing](#unit-testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm installed globally on your machine
- MongoDB installed and running locally Compass or on a remote Cloud server

### Installation

1. Clone the repository: 
 ```bash 
  git clone https://github.com/prakasamv-uncc/ITIS5166-FinalProject.git
```
2. cd ITIS5166-FinalProject,  UI for Angular Code repo, Server for Node Code repo application 

3. Run npm install to install dependencies.

4. Set up the CONFIGURATION at .env file.

5. Add .env file into .gitIgnore to secure your database credentials.

## Technologies Used:

- Angular 17

- Node JS

- Express JS

- MongoDB 

- Mongo Compass

- Karma - Jasmine 

- Cypress 

## Features

- **Basic** Authentication (Register/Login with hashed password)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **JWT Tokens**, make requests with a token after login with Authorization header with value Bearer yourToken where yourToken will be returned in Login response.
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **API documentation**: with [swagger-jsdoc]
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Pre-defined** response structures with proper status codes.
- **Swagger** Included API collection below **API Documentation**
- **Test cases** with Jasmine/Karma and Cypress Applitools



## Frontend Application
 simply run:
 ```bash
 npm install 
``` 

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone https://github.com/prakasamv-uncc/ITIS5166-FinalProject
cd personal-budget
cd server //server application 
npm i
npm run dev 
cd UI //Angular application 
npm i 
ng serve 
```
# Run all Unit tests
ng test

# E2E App Cypress 
npm install cypress –save-dev

npm add cypress --dev

# Open Cypress Window
node ./node_modules/cypress/bin/cypress open
or 
npx cypress open

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/pv-personal-budget

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

## Project Structure

```
server\src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

```
UI\src\
 |--app\                # App root (Routes)
      |--components\    # Custom Components
      |--guard\         # Auth guard for routing 
      |--pages\         # Application page
      |--services\      # Business logic (service layer)
 |--assets\             # Application assets files(Images and themes )
 |--scss\               # Custom express middlewares
 |--app-routing.module.ts        
 |--app.component.html
 |--app.component.scss
 |--app.component.ts   # App entry point
 |--app.module.ts
```
## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:
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


## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "code": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

## Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown. 

## Custom Mongoose Plugins

The app also contains 2 custom mongoose plugins that you can attach to any mongoose model schema. You can find the plugins in `src/models/plugins`.

```javascript
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    /* schema definition here */
  },
  { timestamps: true }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);
```

### toJSON

The toJSON plugin applies the following changes in the toJSON transform call:

- removes \_\_v, createdAt, updatedAt, and any schema path that has private: true
- replaces \_id with id

### Paginate Plugin 

The paginate plugin adds the `paginate` static method to the mongoose schema.

Adding this plugin to the `User` model schema will allow you to do the following:

```javascript
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};
```

The `filter` param is a regular mongo filter.

The `options` param can have the following (optional) fields:

```javascript
const options = {
  sortBy: 'name:desc', // sort order
  limit: 5, // maximum results per page
  page: 2, // page number
};
```
The plugin also supports sorting by multiple criteria (separated by a comma): `sortBy: name:desc,role:asc` 

The `paginate` method returns a Promise, which fulfills with an object having the following properties:

```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```
### About Me
@COPY-RIGHTS Prakasam Venkatachalam @prakasamv-uncc 
