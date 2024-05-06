const joi = require('joi');
const { isIn } = require('validator');

const createIncompleteForm = {
  body: joi.object().keys({
    userId: joi.string().required(),
    isIncomeCompleted: joi.boolean().required(),
    isBudgetCompleted: joi.boolean().required(),
    isExpenseCompleted: joi.boolean().required(),
    isCompleted: joi.boolean().required()
  }),
};

const getIncompleteForms = {
  query: joi.object().keys({
    userId: joi.string(),
    isIncomeCompleted: joi.boolean(),
    isBudgetCompleted: joi.boolean(),
    isExpenseCompleted: joi.boolean(),
    isCompleted: joi.boolean(),
    sortBy: joi.string(),
    limit: joi.number().integer(),
    page: joi.number().integer(),
  }),
};

const getIncompleteForm = {
  params: joi.object().keys({
    userId: joi.string().required(),
  }),
};

const updateIncompleteForm = {
  params: joi.object().keys({
    incompleteFormId: joi.string().required(),
  }),
  body: joi.object().keys({
    userId: joi.string().required(),
    isIncomeCompleted: joi.boolean().required(),
    isBudgetCompleted: joi.boolean().required(),
    isExpenseCompleted: joi.boolean().required(),
    isCompleted: joi.boolean().required()
  }),
};

module.exports = {
  createIncompleteForm,
  getIncompleteForms,
  getIncompleteForm,
  updateIncompleteForm,
};
