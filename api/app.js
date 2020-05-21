const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const dbService = require('./services/db.service');
const DB = dbService().start();

const app = express();
const PORT = process.env.PORT || 4000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    users: [User]
    user: User
  }

  type User {
    id: ID!
    full_name: String!
    username: String!
    email_address: String!
    password: String!
    date_created: String!
  }

  type Quiz {
    id: ID!
    user: User
    title: String!
    description: String
    type: QuizType!
    is_public: Boolean!
    is_active: Boolean!
    date_created: String!
  }

  type Set {
    id: ID!
    quiz: Quiz!
    question: String
    correct_answer: String
    wrong_answer_a: String
    wrong_answer_b: String
  }

  type Attempt {
    id: ID!
    quiz: Quiz!
    user: User!
    user_score: Int!
    max_score: Int!
    date_created: String!
  }

  type QuizType {
    id: ID!
    title: String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: () => {},
  },
};

const server = new ApolloServer({
  typeDefs,
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
