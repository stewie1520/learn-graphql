const { UserModel } = require('@/models/User');
const signinValidationSchema = require('./validations/signin');
const { UserNotFoundError } = require('./errors/UserNotFound');

const signin = async ({ email, password }) => {
  const { value, error } = signinValidationSchema.validate({ email, password });

  if (error) {
    throw error;
  }

  const dbUser = await UserModel.findOne({ email: value.email });
  if (!dbUser) {
    throw new UserNotFoundError({ email: value.email });
  }

  const isPasswordValid = await dbUser.comparePasswordAsync(value.password);
  if (!isPasswordValid) {
    throw new UserNotFoundError({ email: value.email });
  }

  return dbUser;
};

module.exports = { signin };
