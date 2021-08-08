const fs = require('fs');
const path = require('path');

const loadGraphqlTypes = (typePath) => fs.readdirSync(typePath)
  .filter((file) => !file.includes('index.js'))
  .reduce((result, file) => {
    const model = require(path.join(typePath, file));

    if (typeof model !== 'string') {
      throw new Error('graphql type must be defined as string');
    }

    result = `${result}\n${model}`;
    return result;
  }, '');

module.exports = { loadGraphqlTypes };
