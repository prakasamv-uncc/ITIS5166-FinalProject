const httpStatus = require('http-status');
const { IncompleteForm } = require('../models');
const ApiError = require('../utils/ApiError');
const userService = require('./user.service');


/**
 * Create a incomplete form entry
 * @param {Object} incompleteFormBody
 * @returns {Promise<IncompleteForm>}
 */
const createIncompleteForm = async (incompleteFormBody) => {
  return IncompleteForm.create(incompleteFormBody);
}

/**
 * Query based on user id for incomplete forms
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @returns {Promise<QueryResult>}
 *
 */

const queryIncompleteForms = async (filter, options) => {
  const incompleteForms = await IncompleteForm.paginate(filter, options);
  return incompleteForms;
}

/**
 * Get incomplete form by user id
 * @param {ObjectId} userId
 * @returns {Promise<IncompleteForm>}
 */
getIncompleteFormByUserId = async (userId) => {
  return IncompleteForm.find({ userId: userId });
}


/**
 * update incomplete form by id
 * @param {ObjectId} id
 * @returns {Promise<IncompleteForm>}
 */
const updateIncompleteFormById = async (id, updateBody) => {
  const incompleteForm = await getIncompleteFormById(id);
  if (!incompleteForm) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Incomplete form not found');
  }
  Object.assign(incompleteForm, updateBody);
  await incompleteForm.save();
  return incompleteForm;
}

/**
 * Get incomplete form by id
 * @param {ObjectId} id
 * @returns {Promise<IncompleteForm>}
 */
const getIncompleteFormById = async (id
) => {
  return IncompleteForm.findById
  (id);
}

module.exports = {
  createIncompleteForm,
  queryIncompleteForms,
  updateIncompleteFormById,
  getIncompleteFormById
};


