const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const resolvers = require('./resolvers');
const dbService = require('./services/db.service');
const authService = require('./services/auth.service');

const PORT = process.env.PORT || 4000;
const APOLLO_ENGINE_KEY = process.env.APOLLO_ENGINE_KEY;

const app = express();
const DB = dbService().start();

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
  resolvers,
  engine: {
    apiKey: APOLLO_ENGINE_KEY,
  },
  context: ({ req }) => {
    const user = authService().getUser(req.headers.authorization);
    if (!user) throw new AuthenticationError('you must be logged in');
    return { user };
  },
});

server.applyMiddleware({ app, path: '/api' });

app.get('/ping', (req, res) => {
  res.status(200).json({ msg: 'Success' });
});

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at PORT ${PORT}`);
  return DB;
});
