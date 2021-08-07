const mongoose = require('mongoose');

const makeCredentials = (user) => {
  let tempUser = user;
  if (user instanceof mongoose.Document) {
    tempUser = user.toObject();
  }

  const { password, ...credentials } = tempUser;
  return credentials;
};

module.exports = { makeCredentials };
