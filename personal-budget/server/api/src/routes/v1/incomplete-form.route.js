const express = require('express');
const validate = require('../../middlewares/validate');
//const incompleteFormValidation = require('../../validations/incomplete-form.validation');
const incompleteFormController = require('../../controllers/incomplete-form.controller');
const validateToken = require('../../middlewares/validateToken');
const jwtMW = require('../../middlewares/validateJWT');

const router = express.Router();

router.get('/getIncompleteForms', jwtMW, incompleteFormController.getIncompleteForms);
router.post('/createIncompleteForm', jwtMW, incompleteFormController.createIncompleteForm);
router.post('/getIncompleteForm', jwtMW, incompleteFormController.getIncompleteForm);
router.post('/updateIncompleteForm', jwtMW, incompleteFormController.updateIncompleteForm);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: IncompleteForms
 *   description: API endpoints for managing incomplete forms
 */

/**
 * @swagger
 * definitions:
 *   IncompleteForm:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The unique identifier for the incomplete form.
 *       userId:
 *         type: string
 *         description: The user id associated with the incomplete form.
 *       isIncomeCompleted:
 *         type: boolean
 *         description: Whether the income form is completed.
 *       isBudgetCompleted:
 *         type: boolean
 *         description: Whether the budget form is completed.
 *       isExpenseCompleted:
 *         type: boolean
 *         description: Whether the expense form is completed.
 *       isCompleted:
 *         type: boolean
 *         description: Whether the incomplete form is completed.
 *       createdAt:
 *         type: string
 *         format: date-time
 *         description: The date and time the incomplete form was created.
 *       updatedAt:
 *         type: string
 *         format: date-time
 *         description: The date and time the incomplete form was updated.
 *       deletedAt:
 *         type: string
 *         format: date-time
 *         description: The date and time the incomplete form was deleted.
 *       user:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *             description: The unique identifier for the user.
 *           email:
 *             type: string
 *             description: The email of the user.
 *           firstName:
 *             type: string
 *             description: The first name of the user.
 *           lastName:
 *             type: string
 *             description: The last name of the user.
 *           role:
 *             type: string
 *             description: The role of the user.
 *           createdAt:
 *             type: string
 *             format: date-time
 *             description: The date and time the user was created.
 *           updatedAt:
 *             type: string
 *             format: date-time
 *             description: The date and time the user was updated.
 *           deletedAt:
 *             type: string
 *             format: date-time
 *             description: The date and time the user was deleted.
 */

/**
 * @swagger
 * /api/incompleteForms:
 *  post:
 *    summary: Create a new incomplete form
 *    tags: [IncompleteForms]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/IncompleteForm'
 *    responses:
 *      201:
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/IncompleteForm'
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 *  get:
 *    summary: Get all incomplete forms
 *    tags: [IncompleteForms]
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/definitions/IncompleteForm'
 *      500:
 *        description: Internal Server Error
 *  /api/incompleteForms/{userId}:
 *    get:
 *      summary: Get incomplete form by user id
 *      tags: [IncompleteForms]
 *      parameters:
 *        - in: path
 *          name: userId
 *          required: true
 *          description: ID of the user to retrieve incomplete form
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/IncompleteForm'
 *        404:
 *          description: Incomplete form not found
 *        500:
 *          description: Internal Server Error
 *    put:
 *      summary: Update incomplete form by user id
 *      tags: [IncompleteForms]
 *      parameters:
 *        - in: path
 *          name: userId
 *          required: true
 *          description: ID of the user to update incomplete form
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/IncompleteForm'
 *        404:
 *          description: Incomplete form not found
 *        500:
 *          description: Internal Server Error
 */
