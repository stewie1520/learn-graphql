const outputs = `
  type AuthPayload {
    accessToken: String
    refreshToken: String
    user: User
  }

  type User {
    _id: String!
    email: String!
    firstName: String!
    lastName: String!
  }
`;

const mutations = `
  type Mutation {
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthPayload
  }
`;

module.exports = `${outputs} ${mutations}`;
