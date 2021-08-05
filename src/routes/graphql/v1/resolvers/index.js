const BookResolvers = require('./Book');

module.exports = {
  Query: {
    ...BookResolvers.Query,
  },
};
