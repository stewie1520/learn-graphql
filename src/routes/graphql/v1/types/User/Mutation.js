module.exports = `
  type Mutation {
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthPayload

    signin(
      email: String!
      password: String!
    ): AuthPayload
  }
`;
