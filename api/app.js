const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const resolvers = require('./resolvers');
const dbService = require('./services/db.service');

const DB = dbService().start();
const app = express();

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_KEY,
  },
  context: ({ req }) => {
    let user = null;
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      user = jwt.verify(token, JWT_SECRET);
    } catch (error) {}
    return { user };
  },
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at PORT ${PORT}`);
  return DB;
});
