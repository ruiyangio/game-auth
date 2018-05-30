const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    user(username: String!): User
    users(): [User]
  },

  type Mutation {
    createUser(username: String!, password: String!): User
  }

  type User {
    id: String
    username: String
    createDateTime: String
    lastModifiedDateTime: String
  }
`);
