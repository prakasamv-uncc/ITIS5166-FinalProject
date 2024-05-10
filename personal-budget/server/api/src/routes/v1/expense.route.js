const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const expenseValidation = require('../../validations/expense.validation');
const expenseController = require('../../controllers/expense.controller');
const validateToken = require('../../middlewares/validateToken');
const jwtMW = require('../../middlewares/validateJWT');

const router = express.Router();

router
  .route('/')
  //.get(auth('getExpenses'), validate(expenseValidation.getExpenses), expenseController.getExpenses);

router.post('/create', jwtMW, expenseController.createExpense);
router.get('/getExpenses', jwtMW, expenseController.getExpenses);
router.post('/getMonthTotalExpense/:year/:month', jwtMW, expenseController.getMonthTotalExpense);
router.post('/getExpensesByUser', jwtMW, expenseController.getExpenseByUser);
/* router
  .route('/:expenseId')
  //.get(auth('getExpenses'), validate(expenseValidation.getExpense), expenseController.getExpense)
  .patch(auth('manageExpenses'), validate(expenseValidation.updateExpense), expenseController.updateExpense)
  .delete(auth('manageExpenses'), validate(expenseValidation.deleteExpense), expenseController.deleteExpense);
 */
module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: API endpoints for managing expenses
 */


/**
 * @swagger
 * definitions:
 *   Expense:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The unique identifier for the expense.
 *       expenseType:
 *         type: string
 *         description: The type of expense.
 *       country:
 *         type: string
 *         description: The country associated with the expense.
 *       state:
 *         type: string
 *         description: The state associated with the expense.
 *       city:
 *         type: string
 *         description: The city associated with the expense.
 *       amount:
 *         type: number
 *         description: The amount of the expense.
 *       description:
 *         type: string
 *         description: Description of the expense.
 *       category:
 *         type: string
 *         description: The category of the expense.
 *       date:
 *         type: string
 *         format: date
 *         description: The date of the expense (YYYY-MM-DD).
 *
 */

/**
 * @swagger
 * URLs: http://159.65.239.97:3000/api/v1/expenses
 * /v1/expenses:
 *  post:
 *    summary: Create a new expense
 *    tags: [Expenses]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/Expense'
 *          example:
 *            expenseType: Rent
 *            country: USA
 *            state: North Carolina
 *            city: Charlotte
 *            amount: 1000
 *            description: Rent for the month
 *            category: Housing
 *            date: 2021-01-01
 *    responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Internal Server Error
 *  get:
 *    summary: Get all expenses
 *    tags: [Expenses]
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/definitions/Expense'
 *      500:
 *        description: Internal Server Error
 * /v1/expenses/{expenseId}:
 *  get:
 *    summary: Get an expense by ID
 *    tags: [Expenses]
 *    parameters:
 *      - in: path
 *        name: expenseId
 *        required: true
 *        description: ID of the expense to retrieve
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Expense'
 *      404:
 *        description: Not Found
 *  patch:
 *    summary: Update an expense by ID
 *    tags: [Expenses]
 *    parameters:
 *      - in: path
 *        name: expenseId
 *        required: true
 *        description: ID of the expense to update
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/Expense'
 *    responses:
 *      200:
 *        description: OK
 *      500:
 *        description: Internal Server Error
 *  delete:
 *    summary: Delete an expense by ID
 *    tags: [Expenses]
 *    parameters:
 *      - in: path
 *        name: expenseId
 *        required: true
 *        description: ID of the expense to delete
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK
 *      500:
 *        description: Internal Server Error
 * /v1/expenses/getMonthTotalExpense/{year}/{month}:
 *  post:
 *    summary: Get total expenses for a month
 *    tags: [Expenses]
 *    parameters:
 *      - in: path
 *        name: year
 *        required: true
 *        description: Year of the month to retrieve
 *        schema:
 *          type: string
 *      - in: path
 *        name: month
 *        required: true
 *        description: Month to retrieve
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: number
 *      500:
 *        description: Internal Server Error
 */

