require('module-alias/register');
const dotenv = require('dotenv');
// order matter!
dotenv.config();
const { Config } = require('./src/config');

const loadMongo = require('./src/libs/mongo');

const app = require('./src/bootstrap/app');
const { BookModel } = require('./src/models/Book');

const createApp = () => {
  const port = Config.get('connection.port');

  Promise.all([
    loadMongo(),
  ]).then(() => {
    BookModel.create([
      {
        title: 'Book 1',
        description: 'Desc book 1',
        cost: 100,
        price: 120,
      },
      {
        title: 'Book 2',
        description: 'Desc book 2',
        cost: 100,
        price: 120,
      },
      {
        title: 'Book 3',
        description: 'Desc book 3',
        cost: 100,
        price: 120,
      },
    ]);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

createApp();
