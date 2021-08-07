const { BookModel } = require('@/models/Book');
const { makeCleanRegex } = require('@/utils/regex');

const searchBook = async (root, args) => {
  const { title } = args;
  const queryParams = {
    title: makeCleanRegex(title),
  };

  return BookModel.find(queryParams);
};

module.exports = { searchBook };
