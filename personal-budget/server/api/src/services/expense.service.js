const httpStatus = require('http-status');
const { expense } = require('../models');
const ApiError = require('../utils/ApiError');
const userService = require('./user.service');

/**
 * Create a expense
 * @param {Object} expenseBody
 * @returns {Promise<Expense>}
 */
const createExpense = async (expenseBody) => {
  return expense.create(expenseBody);
}

/**
 * Query based on user id for expenses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @returns {Promise<QueryResult>}
 *
 */
const queryExpenses = async (filter, options) => {
  const expenses = await expense.paginate(filter, options);
  return expenses;
}

/**
 * Get expense by user id
 * @param {ObjectId} userId
 * @returns {Promise<Expense>}
 */
const getExpenseByUserId = async (userId) => {
  return expense.find({ userId: userId });
}

const getExpenseTotalByMonth = async (userId, month, year) => {
  if (!userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  const expenses = await expense.aggregate([
    {
      $group: {
        _id: {
          date: {
            month: { $month: "$date" },
            year: { $year: "$date" }
          }
        },
        totalExpense: { $sum: "$amount" }
      },
    }
  ]);
  return expenses;
}

/**
 * update expense by id
 * @param {ObjectId} id
 * @returns {Promise<Expense>}
 */
const updateExpenseById = async (id
) => {
  const expense = await getExpenseById(id);
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  Object.assign(expense, updateBody);
  await expense.save();
  return expense;
}

/**
 * Get expense by id
 * @param {ObjectId} id
 * @returns {Promise<Expense>}
 */
const getExpenseById = async (id) => {
  return expense.findById(id);
}

module.exports = {
  createExpense,
  queryExpenses,
  updateExpenseById,
  getExpenseById,
  getExpenseByUserId,
  getExpenseTotalByMonth
};




