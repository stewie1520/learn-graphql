const mongoose = require('mongoose');
const { Config } = require('@/config');

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
    console.log('Connecting to Mongo...');
  });

  mongoose.connection.on('connected', () => {
    console.log('Mongo is connected.');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Mongo trying to reconnect...');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Unable to connect to the Mongo: ', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongo has disconnected!');

    // Trying to connect
    const waitingMS = 5000;
    setTimeout(() => {
      console.log(`Reconnecting in ${waitingMS / 1000}s...`);
      return mongoose.connect(uri, options);
    }, waitingMS);
  });

  return mongoose.connect(uri, options);
};
