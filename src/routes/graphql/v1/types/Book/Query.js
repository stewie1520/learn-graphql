module.exports = `
  type Query {
    searchBook(title: String): [Book]
    getBookById(id: String!): Book
  }
`;
