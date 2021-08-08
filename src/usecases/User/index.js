const { signup } = require('./signup');
const { signin } = require('./signin');
const { generateTokens } = require('./generateTokens');
const { makeCredentials } = require('./makeCredentials');

module.exports = {
  signup,
  generateTokens,
  makeCredentials,
  signin,
};
