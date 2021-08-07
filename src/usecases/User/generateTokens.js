const jwt = require('jsonwebtoken');

const { Config } = require('@/config');

/**
 * generateTokens generate accessToken and generateToken of user
 *
 * @param {Object} user
 * @return {Object} tokens
 * @return {String} tokens.accessToken
 * @return {String} tokens.generateToken
 */
const generateTokens = (user) => {
  const accessToken = jwt.sign(user, Config.get('jwt.secret'), {
    expiresIn: Config.get('jwt.accessTokenExpiresIn'),
  });

  const refreshToken = jwt.sign(user, Config.get('jwt.secret'), {
    expiresIn: Config.get('jwt.refreshTokenExpiresIn'),
    algorithm: 'HS256',
  });

  return {
    accessToken,
    refreshToken,
  };
};

module.exports = { generateTokens };
