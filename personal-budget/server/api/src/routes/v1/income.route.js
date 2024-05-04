const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const incomeValidation = require('../../validations/income.validation');
const incomeController = require('../../controllers/income.controller');
const validateToken = require('../../middlewares/validateToken');
const jwtMW = require('../../middlewares/validateJWT');

const router = express.Router();

router
  .route('/')
  //.get(auth('getIncomes'), validate(incomeValidation.getIncomes), incomeController.getIncomes);

router.post('/create', jwtMW, incomeController.createIncome);
router.get('/getIncomes', jwtMW, incomeController.getIncomes);
router.post('/getMonthTotalIncome/:year/:month', jwtMW, incomeController.getMonthTotalIncome);
router
  .route('/:incomeId')
  //.get(auth('getIncomes'), validate(incomeValidation.getIncome), incomeController.getIncome)
  .patch(auth('manageIncomes'), validate(incomeValidation.updateIncome), incomeController.updateIncome)
  .delete(auth('manageIncomes'), validate(incomeValidation.deleteIncome), incomeController.deleteIncome);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Incomes
 *   description: API endpoints for managing incomes
 */

/**
 * @swagger
 * definitions:
 *   Income:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The unique identifier for the income.
 *       incomeType:
 *         type: string
 *         description: The type of income.
 *       country:
 *         type: string
 *         description: The country associated with the income.
 *       state:
 *         type: string
 *         description: The state associated with the income.
 *       city:
 *         type: string
 *         description: The city associated with the income.
 *       amount:
 *         type: number
 *         description: The amount of the income.
 *       description:
 *         type: string
 *         description: Description of the income.
 *       category:
 *         type: string
 *         description: The category of the income.
 *       date:
 *         type: string
 *         format: date
 *         description: The date of the income (YYYY-MM-DD).
 */

/**
 * @swagger
 * URLs: http://localhost:3000/api/v1/incomes
 * /v1/incomes:
 *   post:
 *     summary: Create a new income
 *     tags: [Incomes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Income'
 *           example:
 *            incomeType: Salary
 *            country: USA
 *            state: North Carolina
 *            city: Charlotte
 *            amount: 5000
 *            description: Salary for the month of March
 *            category: Employment
 *            date: 2021-03-01
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Income'
 *       500:
 *         description: Internal Server Error
 *   get:
 *     summary: Get all incomes
 *     tags: [Incomes]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Income'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/incomes/{incomeId}:
 *   get:
 *     summary: Get an income by ID
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: incomeId
 *         required: true
 *         description: ID of the income to retrieve
 *         schema:
 *           type: string

 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Income'
 *       404:
 *         description: Income not found
 *       500:
 *         description: Internal Server Error
 *   put:
 *     summary: Update an income by ID
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: incomeId
 *         required: true
 *         description: ID of the income to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: Updated income object
 *         schema:
 *           $ref: '#/components/schemas/Income'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Income'
 *       404:
 *         description: Income not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     summary: Delete an income by ID
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: incomeId
 *         required: true
 *         description: ID of the income to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Income not found
 *       500:
 *         description: Internal Server Error
 */
