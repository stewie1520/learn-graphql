const { signup } = require('./signup');

module.exports = {
  Query: {},
  Mutation: {
    signup,
  },
};
