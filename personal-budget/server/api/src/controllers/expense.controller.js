const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { expenseService } = require('../services');

const createExpense = catchAsync(async (req, res) => {
  const Expense = await expenseService.createExpense(req.body);
  res.status(httpStatus.CREATED).send({'status':httpStatus.CREATED,'message':'success','data':Expense});
  res.status(httpStatus.EXPECTATION_FAILED).send({ 'status': httpStatus.EXPECTATION_FAILED, 'message': 'The request was unsuccessful. Please try again later.' });
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ 'status': httpStatus.INTERNAL_SERVER_ERROR, 'message': 'The server encountered an error while processing your request.' });
  res.status(httpStatus.UNAUTHORIZED).send({ 'status': httpStatus.UNAUTHORIZED, 'message': 'You are not authorized to access this resource.' });
  res.status(httpStatus.NOT_FOUND).send({ 'status': httpStatus.NOT_FOUND, 'message': 'The requested resource was not found.' });

}
);

const getExpenses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await expenseService.queryExpenses(filter, options);
  res.send(result);
}
);

const getExpense = catchAsync(async (req, res) => {
  const expense = await expenseService.getExpenseByUserId(req.params.userId);
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  res.send(expense);
}
);

const getMonthTotalExpense = catchAsync(async (req, res) => {
  const expense = await expenseService.getMonthTotalExpense(req.params.year, req.params.month);
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  res.send(expense);
}
);

const updateExpense = catchAsync(async (req, res) => {
  const expense = await expenseService.updateExpenseById(req.params.ExpenseId, req.body);
  res.send(expense);
}
);

const deleteExpense = catchAsync(async (req, res) => {
  await expenseService.deleteExpenseById(req.params.expenseId);
  res.status(httpStatus.NO_CONTENT).send();
}
);

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  getMonthTotalExpense,
  deleteExpense,
};
