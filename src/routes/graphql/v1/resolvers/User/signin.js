const logger = require('@/libs/logger');
const { ApiResponse, httpStatuses } = require('@/utils/apiResponse');
const userUsecase = require('@/usecases/User');

const signin = async (root, args) => {
  try {
    const { email, password } = args;
    const dbUser = await userUsecase.signin({ email, password });
    const credentials = userUsecase.makeCredentials(dbUser);
    const tokens = userUsecase.generateTokens(credentials);

    return {
      ...tokens,
      user: credentials,
    };
  } catch (error) {
    logger.error(error);
    throw new ApiResponse('unexpected error happen when sign up user', error, httpStatuses.INTERNAL_SERVER_ERROR);
  }
};

module.exports = { signin };
