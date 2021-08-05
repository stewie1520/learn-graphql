const { pick, invert } = require('lodash');

const httpStatuses = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
};

const httpCodes = invert(httpStatuses);

function ApiResponse(message, error, statusCode) {
  if (!httpCodes[statusCode]) {
    throw new Error(`No support status code: ${statusCode}`);
  }

  this.message = message;
  this.error = error;
  this.statusCode = statusCode;
}

ApiResponse.prototype = Object.create({}, Error.prototype);

ApiResponse.prototype.toObject = function toObject() {
  return pick(this, ['message', 'error', 'statusCode']);
};

module.exports = {
  ApiResponse,
  httpStatuses,
  httpCodes,
};
