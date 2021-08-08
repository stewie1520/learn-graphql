const { UserModel } = require('@/models/User');
const signUpValidationSchema = require('./validations/signup');

const signup = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  const user = {
    email,
    password,
    firstName,
    lastName,
  };

  const { value, error } = signUpValidationSchema.validate(user);
  if (error) {
    throw error;
  }

  return UserModel.create(value);
};

module.exports = { signup };
