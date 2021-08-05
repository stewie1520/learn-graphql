const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

module.exports = (req, res, next) => {
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
    context: { req, res, next },
  })(req, res);
};
