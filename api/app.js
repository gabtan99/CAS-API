const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

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
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at https://localhost:${PORT}${server.graphqlPath}`),
);
