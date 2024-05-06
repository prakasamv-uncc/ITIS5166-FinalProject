const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { budgetService } = require('../services');

const createBudget = catchAsync(async (req, res) => {
  const budget = await budgetService.createBudget(req.body);
  res.status(httpStatus.CREATED).send(budget);
});

const getBudgets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await budgetService.queryBudgets(filter, options);
  res.send(result);
});

const getBudget = catchAsync(async (req, res) => {
  const budget = await budgetService.getBudgetById(req.params.budgetId);
  if (!budget) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Budget not found');
  }
  res.send(budget);
});


const getMonthTotalBudget = catchAsync(async (req, res) => {
  const budget = await budgetService.getMonthTotalBudget(req.params.year, req.params.month);
  if (!budget) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Budget not found');
  }
  res.send(budget);
});

const updateBudget = catchAsync(async (req, res) => {
  const budget = await budgetService.updateBudgetById(req.params.budgetId, req.body);
  res.send(budget);
});

const deleteBudget = catchAsync(async (req, res) => {
  await budgetService.deleteBudgetById(req.params.budgetId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBudget,
  getBudgets,
  getBudget,
  updateBudget,
  getMonthTotalBudget,
  deleteBudget,
};
