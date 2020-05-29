const express = require('express');
const dbService = require('./services/db.service');
const server = require('../config/Apollo');

const PORT = process.env.PORT || 4000;

const app = express();
const DB = dbService().start();

server.applyMiddleware({ app, path: '/api' });

app.get('/ping', (_, res) => {
  res.status(200).json({ msg: 'Success' });
});

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at PORT ${PORT}`);
  return DB;
});
