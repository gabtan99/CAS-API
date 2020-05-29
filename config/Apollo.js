const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const authService = require('../api/services/auth.service');
const resolvers = require('../api/resolvers');

const APOLLO_ENGINE_KEY = process.env.APOLLO_ENGINE_KEY;

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
  resolvers,
  engine: {
    apiKey: APOLLO_ENGINE_KEY,
  },
  context: ({ req }) => {
    const user = authService().getUser(req.headers.authorization);
    if (!user) throw new AuthenticationError('you must be logged in');
    return user;
  },
});

module.exports = server;
