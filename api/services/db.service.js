const Database = require('../../config/Database');

const dbService = () => {
  const authenticateDB = () => {
    console.log('⌛ DATABASE: Connecting...');
    return Database.authenticate();
  };

  const start = async () => {
    try {
      await authenticateDB();
      console.log('✅ DATABASE: Connected.');
    } catch (err) {
      console.info('❌ DATABASE: Error.', err);
    }
  };

  return {
    start,
  };
};

module.exports = dbService;
