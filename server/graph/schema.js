const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    updateUser(displayname: String, password: String): User
  }

  type User {
    id: String
    username: String
    displayName: String
    createDateTime: String
    lastModifiedDateTime: String
  }
`);
