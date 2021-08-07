require('module-alias/register');
require('dotenv').config();

const logger = require('./src/middlewares/app/logger');
const { Config } = require('./src/config');
const loadMongo = require('./src/libs/mongo');
const app = require('./src/bootstrap/app');

console.log = logger.info.bind(logger);

const createApp = () => {
  const port = Config.get('connection.port');

  Promise.all([
    loadMongo(),
  ]);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

createApp();
