const { signup } = require('./signup');
const { signin } = require('./signin');

module.exports = {
  Query: {},
  Mutation: {
    signup,
    signin,
  },
};
