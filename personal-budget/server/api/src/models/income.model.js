const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const autoIncrement = require('mongoose-auto-increment');
const { required } = require('joi');

autoIncrement.initialize(mongoose.connection);
const incomeSchema = mongoose.Schema(
  {
    user: {
      type: String, //mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
    incomeType: {
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
incomeSchema.plugin(toJSON);
incomeSchema.plugin(paginate);
incomeSchema.plugin(autoIncrement.plugin, { model: 'Income', field: 'id', startAt: 1, incrementBy: 1});
/**
 * @typedef Income
 */
const Income = mongoose.model('Income', incomeSchema);
/*
Income.aggregate([
  {
    $group: {
      _id: {
        date: {
          month: { $month: "$date" },
          year: { $year: "$date" }
        }
      },
      totalIncome: { $sum: "$amount" }
    },
  },
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  }); */


module.exports = Income;
