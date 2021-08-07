const mongoose = require('mongoose');
const { Config } = require('@/config');
const logger = require('@/libs/logger');

module.exports = () => {
  const uri = Config.get('db.uri');

  const options = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  /** Handle mongoose connection events */
  mongoose.connection.on('connecting', () => {
    logger.info('Connecting to Mongo...');
  });

  mongoose.connection.on('connected', () => {
    logger.info('Mongo is connected.');
  });

  mongoose.connection.on('reconnected', () => {
    logger.info('Mongo trying to reconnect...');
  });

  mongoose.connection.on('error', (error) => {
    logger.error('Unable to connect to the Mongo: ', error);
  });

  mongoose.connection.on('disconnected', () => {
    logger.info('Mongo has disconnected!');

    // Trying to connect
    const waitingMS = 5000;
    setTimeout(() => {
      logger.info(`Reconnecting in ${waitingMS / 1000}s...`);
      return mongoose.connect(uri, options);
    }, waitingMS);
  });

  return mongoose.connect(uri, options);
};
