const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const budgetSchema = mongoose.Schema(
  {
    user: {
      type: String, //mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    budgetType: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      CurrencyCodes: String,
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
budgetSchema.plugin(toJSON);
budgetSchema.plugin(paginate);

/**
 * @typedef Budget
 */
const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
