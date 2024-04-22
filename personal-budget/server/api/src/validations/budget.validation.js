const Joi = require('joi');

const createBudget = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    budgetType: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.date().required(),
  }),
};

const getBudgets = {
  query: Joi.object().keys({
    id: Joi.string(),
    budgetType: Joi.string(),
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

const getBudget = {
  params: Joi.object().keys({
    budgetId: Joi.string().required(),
  }),
};

const updateBudget = {
  params: Joi.object().keys({
    budgetId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      id: Joi.string(),
      budgetType: Joi.string(),
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

const deleteBudget = {
  params: Joi.object().keys({
    budgetId: Joi.string().required(),
  }),
};

module.exports = {
  createBudget,
  getBudgets,
  getBudget,
  updateBudget,
  deleteBudget,
};
