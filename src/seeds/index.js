require('module-alias/register');
require('dotenv').config();

const loadMongo = require('@/libs/mongo');
const { BookModel } = require('@/models/Book');

const books = [
  {
    title: 'Book 1',
    description: 'Book 1 description',
    cost: 100,
    price: 200,
  },
  {
    title: 'Book 2',
    description: 'Book 2 description',
    cost: 100,
    price: 200,
  },
  {
    title: 'Book 3',
    description: 'Book 3 description',
    cost: 100,
    price: 200,
  },
];

(async () => {
  await loadMongo();
  await BookModel.create(books);
  process.exit(0);
})();
