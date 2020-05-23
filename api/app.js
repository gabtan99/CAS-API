const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const resolvers = require('./resolvers');

const dbService = require('./services/db.service');
const DB = dbService().start();

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_KEY,
  },
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at PORT ${PORT}`);
  return DB;
});
