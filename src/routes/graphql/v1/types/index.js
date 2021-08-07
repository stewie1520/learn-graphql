/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

const typeArrays = loadFilesSync(path.join(__dirname, '*', 'index.js'));

module.exports = mergeTypeDefs(typeArrays);
