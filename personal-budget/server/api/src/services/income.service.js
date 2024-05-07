const httpStatus = require('http-status');
const { Income } = require('../models');
const ApiError = require('../utils/ApiError');
const userService = require('./user.service');

/**
 * Create a income
 * @param {Object} incomeBody
 * @returns {Promise<Income>}
 */
const createIncome = async (incomeBody) => {
  return Income.create(incomeBody);
};
const getIncomeTotalByMonth = async (userId, month, year) => {
  if (!userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const incomes = await Income.aggregate([
    {
      $match: {
        //userId: userId,
        date: {
          $gte: new Date(year, month - 1, 1),
          $lt: new Date(year, month, 0)
        }
      }
    },
    {
      $group: {
        _id: null,
        totalIncome: { $sum: "$amount" }
      }
    }
  ]);

  return incomes[0] ? incomes[0].totalIncome : 0;
};





/**
 *
 */

/**
 * Query for incomes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryIncomes = async (filter, options) => {
  userService.getUserById(filter.user);
  const incomes = await Income.paginate(filter, options);
  return incomes;
};

/**
 * Get income by id
 * @param {ObjectId} user - The user of the income.
 * @returns {Promise<Income>} - The income document.
 */
const getIncomeById = async (user) => {
  const userId = await userService.getUserById(user);
  if (!userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found');
  }
  return Income.findById(user);
};

/**
 * Update income by id
 * @param {ObjectId} user - The user of the income.
 * @param {Object} updateBody - The fields to update.
 * @returns {Promise<Income>}
 */
const updateIncomeById = async (user, updateBody) => {
  const income = await getIncomeById(user);
  if (!income) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found');
  }
  Object.assign(income, updateBody);
  await income.save();
  return income;
};

/**
 * Delete income by id
 * @param {ObjectId} incomeId - The user of the income.
 * @returns {Promise<Income>}
 */
const deleteIncomeById = async (user) => {
  const userId = await userService.getUserById(user);
  if (!userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found');
  }
  const income = await getIncomeById(userId);
  if (!income) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found');
  }
  await income.remove();
  return income;
};

module.exports = {
  createIncome,
  queryIncomes,
  getIncomeById,
  updateIncomeById,
  deleteIncomeById,
  getIncomeTotalByMonth
};
