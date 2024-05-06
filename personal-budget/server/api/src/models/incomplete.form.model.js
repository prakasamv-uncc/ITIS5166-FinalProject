const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const incompleteFormSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  isIncomeCompleted: {
    type: Boolean,
    required: true
  },
  isBudgetCompleted: {
    type: Boolean,
    required: true
  },
  isExpenseCompleted: {
    type: Boolean,
    required: true
  },
  // Other form fields as needed
  isCompleted: {
    type: Boolean,
    default: false // Default value is false (incomplete)
  }
});

incompleteFormSchema.plugin(toJSON);
incompleteFormSchema.plugin(paginate);

/**
 * check if form is completed
 * @param {Boolean} isIncomeCompleted - The income form status
 * @param {Boolean} isBudgetCompleted - The budget form status
 * @param {Boolean} isExpenseCompleted - The expense form status
 * @param {Boolean} isCompleted - The form status
 */

/**
 * @typedef IncompleteForm
 */
const IncompleteForm = mongoose.model('IncompleteForm', incompleteFormSchema);

module.exports = IncompleteForm;
