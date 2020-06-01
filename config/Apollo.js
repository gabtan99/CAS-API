const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const authService = require('../api/services/auth.service');
const resolvers = require('./Resolvers');

const APOLLO_ENGINE_KEY = process.env.APOLLO_ENGINE_KEY;

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
  resolvers,
  introspection: true,
  playground: true,
  engine: {
    apiKey: APOLLO_ENGINE_KEY,
  },
  context: ({ req }) => authService().getUser(req.headers.authorization),
});

module.exports = server;
