const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { incompleteFormService } = require('../services');

const createIncompleteForm = catchAsync(async (req, res) => {
  const incompleteForm = await incompleteFormService.createIncompleteForm(req.body);
  res.status(httpStatus.CREATED).send({'status':httpStatus.CREATED,'message':'success','data':incompleteForm});
}
);

const getIncompleteForms = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await incompleteFormService.queryIncompleteForms(filter, options);
  res.send(result);
}
);

const getIncompleteForm = catchAsync(async (req, res) => {
  const incompleteForm = await incompleteFormService.getIncompleteFormByUserId(req.params.userId);
  if (!incompleteForm) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Incomplete form not found');
  }
  res.send(incompleteForm);
}
);

const updateIncompleteForm = catchAsync(async (req, res) => {
  const incompleteForm = await incompleteFormService.updateIncompleteFormById(req.params.incompleteFormId, req.body);
  res.send(incompleteForm);
}
);

module.exports = {
  createIncompleteForm,
  getIncompleteForms,
  getIncompleteForm,
  updateIncompleteForm,
};



