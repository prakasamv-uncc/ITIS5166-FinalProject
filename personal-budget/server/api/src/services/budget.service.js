const httpStatus = require('http-status');
const { Budget } = require('../models');
const ApiError = require('../utils/ApiError');
const userService = require('./user.service');

/**
 * Create a budget
 * @param {Object} budgetBody
 * @returns {Promise<Budget>}
 */
const createBudget = async (budgetBody) => {
  return Budget.create(budgetBody);
};

/**
 * Query for budgets
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBudgets = async (filter, options) => {
  userService.getUserById(filter.user, options);
  const budgets = await Budget.paginate(filter, options);
  return budgets;
};

/**
 * Get budget by id
 * @param {ObjectId} user - The user of the budget.
 * @returns {Promise<Budget>} - The budget document.
 */
const getBudgetById = async (user) => {
  const userId = await userService.getUserById(user);
  if (!userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Budget not found');
  }
  return Budget.findById(user);
};

/**
 * Update budget by id
 * @param {ObjectId} user - The user of the budget.
 * @param {Object} updateBody - The fields to update.
 * @returns {Promise<Budget>}
 */
const updateBudgetById = async (user, updateBody) => {
  const budget = await getBudgetById(user);
  if (!budget) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Budget not found');
  }
  Object.assign(budget, updateBody);
  await budget.save();
  return budget;
};

/**
 * Delete budget by id
 * @param {ObjectId} budgetId - The user of the budget.
 */
const deleteBudgetById = async (user) => {
  const budget = await getBudgetById(user);
  if (!budget) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Budget not found');
  }
  await budget.remove();
};

module.exports = {
  createBudget,
  queryBudgets,
  getBudgetById,
  updateBudgetById,
  deleteBudgetById,
};
