const { mergeTypes } = require('merge-graphql-schemas');
const typeDefBook = require('./Book/index');

const typeDefs = [
  typeDefBook,
];

module.exports = mergeTypes(typeDefs, { all: true });
