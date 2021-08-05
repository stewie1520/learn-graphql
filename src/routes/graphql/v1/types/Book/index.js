const output = `
  type Book {
    id: String!
    title: String
    description: String
    cost: Float
    price: Float
  }
`;

const query = `
  type Query {
    searchBook(title: String): [Book]
    getBookById(id: String!): Book
  }
`;

module.exports = `${output} ${query}`;
