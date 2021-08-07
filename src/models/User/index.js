const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { definition, options } = require('./schema');

const UserSchema = new mongoose.Schema(definition, options);
UserSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel };
