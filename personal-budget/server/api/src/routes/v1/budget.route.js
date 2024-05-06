const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const budgetValidation = require('../../validations/budget.validation');
const budgetController = require('../../controllers/budget.controller');
const jwtMW = require('../../middlewares/validateJWT');

const router = express.Router();

router
  .route('/')
  //.post(auth('manageBudgets'), validate(budgetValidation.createBudget), budgetController.createBudget)
  //.get(auth('getBudgets'), validate(budgetValidation.getBudgets), budgetController.getBudgets);

router.post('/create', jwtMW, budgetController.createBudget);
router.get('/getBudgets', jwtMW, budgetController.getBudgets);
router.post('/getMonthTotalBudget/:year/:month', jwtMW, budgetController.getMonthTotalBudget);
router
  .route('/:budgetId')
  .get(auth('getBudgets'), validate(budgetValidation.getBudget), budgetController.getBudget)
  .patch(auth('manageBudgets'), validate(budgetValidation.updateBudget), budgetController.updateBudget)
  .delete(auth('manageBudgets'), validate(budgetValidation.deleteBudget), budgetController.deleteBudget);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Budgets
 *   description: API endpoints for managing budgets
 */

/**
 * @swagger
 * definitions:
 *   Budget:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The unique identifier for the budget.
 *       name:
 *         type: string
 *         description: The name of the budget.
 *       amount:
 *         type: number
 *         description: The amount of the budget.
 *       description:
 *         type: string
 *         description: Description of the budget.
 *       startDate:
 *         type: string
 *         format: date
 *         description: The start date of the budget (YYYY-MM-DD).
 *       endDate:
 *         type: string
 *         format: date
 *         description: The end date of the budget (YYYY-MM-DD).
 */

/**
 * @swagger
 * /api/budgets:
 *   post:
 *     summary: Create a new budget
 *     tags: [Budgets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Budget'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Budget'
 *       500:
 *         description: Internal Server Error
 *   get:
 *     summary: Get all budgets
 *     tags: [Budgets]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Budget'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/budgets/{budgetId}:
 *   get:
 *     summary: Get a budget by ID
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: budgetId
 *         required: true
 *         description: ID of the budget to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Budget'
 *       404:
 *         description: Budget not found
 *       500:
 *         description: Internal Server Error
 *   put:
 *     summary: Update a budget by ID
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: budgetId
 *         required: true
 *         description: ID of the budget to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: Updated budget object
 *         schema:
 *           $ref: '#/definitions/Budget'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Budget'
 *       404:
 *         description: Budget not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     summary: Delete a budget by ID
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: budgetId
 *         required: true
 *         description: ID of the budget to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Budget not found
 *       500:
 *         description: Internal Server Error
 */
