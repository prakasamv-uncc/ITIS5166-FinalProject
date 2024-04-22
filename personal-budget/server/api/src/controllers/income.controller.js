const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { incomeService } = require('../services');

const createIncome = catchAsync(async (req, res) => {
  const income = await incomeService.createIncome(req.body);
  res.status(httpStatus.CREATED).send(income);
});

const getIncomes = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    'id',
    'incomeType',
    'country',
    'state',
    'city',
    'amount',
    'description',
    'category',
    'date',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await incomeService.queryIncomes(filter, options);
  res.send(result);
});

const getIncome = catchAsync(async (req, res) => {
  const income = await incomeService.getIncomeById(req.params.incomeId);
  if (!income) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found');
  }
  res.send(income);
});

const updateIncome = catchAsync(async (req, res) => {
  const income = await incomeService.updateIncomeById(req.params.incomeId, req.body);
  res.send(income);
});

const deleteIncome = catchAsync(async (req, res) => {
  await incomeService.deleteIncomeById(req.params.incomeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createIncome,
  getIncomes,
  getIncome,
  updateIncome,
  deleteIncome,
};
