const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { incomeService } = require('../services');

const createIncome = catchAsync(async (req, res) => {
  const income = await incomeService.createIncome(req.body);
  res.status(httpStatus.CREATED).send({'status':httpStatus.CREATED,'message':'success','data':income});
  res.status(httpStatus.EXPECTATION_FAILED).send({'status':httpStatus.EXPECTATION_FAILED, 'message':'The request was unsuccessful. Please try again later.'});
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({'status':httpStatus.INTERNAL_SERVER_ERROR, 'message':'The server encountered an error while processing your request.'});
  res.status(httpStatus.UNAUTHORIZED).send({'status':httpStatus.UNAUTHORIZED, 'message':'You are not authorized to access this resource.'});
  res.status(httpStatus.NOT_FOUND).send({'status':httpStatus.NOT_FOUND, 'message':'The requested resource was not found.'});
});



const getMonthTotalIncome = catchAsync(async (req, res) => {
  const { month, year } = req.params;
  const userId = req.body.userId;
  const totalIncome = await incomeService.getIncomeTotalByMonth(userId, month, year);
  res.send({ totalIncome });
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

const getIncomeByMonth = catchAsync(async (req, res) => {
  try {
    const incomes = await Income.aggregate([
      {
        $match: {
          date: {
            $gte: new Date((new Date().getFullYear() - 5), 0, 1), // 5 years from now
            $lte: new Date()
          }
        }
      },
      {
        $group: {
          _id: { month: { $month: "$date" }, year: { $year: "$date" } },
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }
      }
    ]);

    res.send(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
  getIncomeByMonth,
  getIncomes,
  getIncome,
  updateIncome,
  deleteIncome,
  getMonthTotalIncome
};
