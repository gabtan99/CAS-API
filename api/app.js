const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const PORT = process.env.PORT || 4000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true,
  engine: true,
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at PORT ${PORT}`));
