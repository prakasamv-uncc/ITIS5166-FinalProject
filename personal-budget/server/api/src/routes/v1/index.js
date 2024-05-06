const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const budgetRoute = require('./budget.route');
const incomeRoute = require('./income.route');
const expenseRoute = require('./expense.route');
const incompleteFormRoute = require('./incomplete-form.route');

const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/incomes',
    route: incomeRoute,
  },
  {
    path: '/budgets',
    route: budgetRoute,
  },
  {
    path: '/expenses',
    route: expenseRoute,
  },
  {
    path: '/incomplete-forms',
    route: incompleteFormRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
//if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
//}

module.exports = router;
