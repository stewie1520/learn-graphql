const logger = require('@/libs/logger');
const userUsecase = require('@/usecases/User');
const { ApiResponse, httpStatuses } = require('@/utils/apiResponse');

const signup = async (root, args) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
    } = args;

    const dbUser = await userUsecase.signup({
      email,
      password,
      firstName,
      lastName,
    });

    const credentials = userUsecase.makeCredentials(dbUser);

    const { accessToken, refreshToken } = userUsecase.generateTokens(credentials);

    return {
      accessToken,
      refreshToken,
      user: credentials,
    };
  } catch (err) {
    logger.error(err);
    throw new ApiResponse('unexpected error happen when sign up user', err, httpStatuses.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  signup,
};
