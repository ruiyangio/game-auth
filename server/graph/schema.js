const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    createUser(username: String!, password: String!, displayName: String!, admin: Boolean): User
    updateUser(id: String!, displayName: String, password: String, admin: Boolean): User
  }

  type User {
    id: String
    username: String
    displayName: String
    createDateTime: String
    lastModifiedDateTime: String
    admin: Boolean
  }
`);
