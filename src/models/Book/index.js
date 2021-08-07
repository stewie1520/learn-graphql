const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

const { definition, options } = require('./schema');

const BookSchema = new mongoose.Schema(definition, options);
BookSchema.plugin(mongoosePaginate);
BookSchema.plugin(mongooseDelete);

const BookModel = mongoose.model('Book', BookSchema);

module.exports = { BookModel };
