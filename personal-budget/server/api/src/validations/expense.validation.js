const Joi = require('joi');

const createExpense = {
  token: Joi.string(),
  body: Joi.object().keys({
    id: Joi.string().required(),
    expenseType: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.date().required(),
  }),
};

const getExpenses = {
  query: Joi.object().keys({
    id: Joi.string(),
    expenseType: Joi.string(),
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    amount: Joi.number(),
    description: Joi.string(),
    category: Joi.string(),
    date: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getExpense = {
  params: Joi.object().keys({
    expenseId: Joi.string().required(),
  }),
};

const updateExpense = {
  params: Joi.object().keys({
    expenseId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      id: Joi.string(),
      expenseType: Joi.string(),
      country: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      amount: Joi.number(),
      description: Joi.string(),
      category: Joi.string(),
      date: Joi.date(),
    })
    .min(1),
};

const deleteExpense = {
  params: Joi.object().keys({
    expenseId: Joi.string().required(),
  }),
};

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
};
