const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const expenseSchema = mongoose.Schema(
  {
    user: {
      type: String, //mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
expenseSchema.plugin(toJSON);
expenseSchema.plugin(paginate);

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
