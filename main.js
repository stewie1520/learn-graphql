require('module-alias/register');
require('dotenv').config();

const logger = require('./src/libs/logger');
const { Config } = require('./src/config');
const loadMongo = require('./src/libs/mongo');
const app = require('./src/bootstrap/app');

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
} else {
  console.log = logger.info.bind(logger);
}

const createApp = () => {
  const port = Config.get('connection.port');

  Promise.all([
    loadMongo(),
  ]);

  app.listen(port, () => {
    logger.info(`App listening on port ${port}`);
  });
};

createApp();
