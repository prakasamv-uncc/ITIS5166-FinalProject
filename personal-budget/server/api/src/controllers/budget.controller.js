const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { budgetService } = require('../services');

const createBudget = catchAsync(async (req, res) => {
  const budget = await budgetService.createBudget(req.body);
  res.status(httpStatus.CREATED).send({'status':httpStatus.CREATED,'message':'success','data':budget});
  res.status(httpStatus.EXPECTATION_FAILED).send({'status':httpStatus.EXPECTATION_FAILED, 'message':'The request was unsuccessful. Please try again later.'});
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({'status':httpStatus.INTERNAL_SERVER_ERROR, 'message':'The server encountered an error while processing your request.'});
  res.status(httpStatus.UNAUTHORIZED).send({'status':httpStatus.UNAUTHORIZED, 'message':'You are not authorized to access this resource.'});
  res.status(httpStatus.NOT_FOUND).send({'status':httpStatus.NOT_FOUND, 'message':'The requested resource was not found.'}  );
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

/* const getBudgetsByCategory = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['category']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await budgetService.queryBudgetsByCategory(filter, options);
  res.send(result);
}); */

const getBudgetsByCategory = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['category']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await budgetService.queryBudgetsByCategory(filter, options);
  res.send(result);
});

module.exports = {
  createBudget,
  getBudgets,
  getBudget,
  updateBudget,
  getMonthTotalBudget,
  deleteBudget,
  getBudgetsByCategory
};
