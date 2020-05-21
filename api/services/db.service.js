const connection = require('../../config/connection');

const dbService = () => {
  const authenticateDB = () => {
    console.log('Attempting to connect...');
    return connection.authenticate();
  };

  const start = async () => {
    try {
      await authenticateDB();
      console.log('Successfully connected to database');
    } catch (err) {
      console.info('unable to connect to the database:', err);
    }
  };

  return {
    start,
  };
};

module.exports = dbService;
