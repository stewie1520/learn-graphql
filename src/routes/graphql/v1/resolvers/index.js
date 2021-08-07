const BookResolvers = require('./Book');
const UserResolvers = require('./User');

module.exports = {
  Query: {
    ...BookResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
  },
};
