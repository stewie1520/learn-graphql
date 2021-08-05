const { ApiResponse, httpStatuses, httpCodes } = require('@/utils/apiResponse');

const errorHandler = (error, req, res) => {
  let apiError = error;
  if (!(apiError instanceof ApiResponse)) {
    apiError = new ApiResponse(error.message, error, error.statusCode || httpStatuses.BAD_REQUEST);
  }

  return res.status(apiError.statusCode).json(apiError.toObject());
};

const notFound = (req, res, next) => {
  const error = new ApiResponse(`Unknown path components: ${req.originalUrl}`, new Error(httpCodes[400]), httpStatuses.NOT_FOUND);
  return errorHandler(error, req, res, next);
};

module.exports = {
  /**
   * @param {import('express').Express} app - Express app instance
   */
  useErrorHandler: (app) => {
    app.use(notFound);
    app.use(errorHandler);
  },
};
