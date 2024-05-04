const Joi = require('joi');

const createIncome = {
  token: Joi.string(),
  body: Joi.object().keys({
    id: Joi.string().required(),
    incomeType: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.date().required(),
  }),
};

const getIncomes = {
  query: Joi.object().keys({
    id: Joi.string(),
    incomeType: Joi.string(),
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

const getIncome = {
  params: Joi.object().keys({
    incomeId: Joi.string().required(),
  }),
};

const updateIncome = {
  params: Joi.object().keys({
    incomeId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      id: Joi.string(),
      incomeType: Joi.string(),
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

const deleteIncome = {
  params: Joi.object().keys({
    incomeId: Joi.string().required(),
  }),
};

module.exports = {
  createIncome,
  getIncomes,
  getIncome,
  updateIncome,
  deleteIncome,
};
