const mongoose = require('mongoose');
const { definition, options } = require('./schema');

const BookSchema = new mongoose.Schema(definition, options);

const BookModel = mongoose.model('Book', BookSchema);

module.exports = { BookModel };
