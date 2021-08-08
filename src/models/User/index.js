const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');

const { definition, options } = require('./schema');

const UserSchema = new mongoose.Schema(definition, options);
UserSchema.plugin(mongoosePaginate);

UserSchema.methods.hashPasswordAsync = async function hashPasswordAsync() {
  this.password = await bcrypt.hash(this.password, 10);
};

UserSchema.methods.comparePasswordAsync = async function comparePasswordAsync(plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

UserSchema.pre('save', async function onBeforeSaveUser(next) {
  if (this.isModified('password')) {
    await this.hashPasswordAsync();
  }

  return next();
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel };
