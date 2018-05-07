const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const util = require('../util');

const userSchema = new Schema({
  createDateTime: { type: Date, default: Date.now },
  lastModifiedDateTime: { type: Date, default: Date.now },
  username: { type: String, unique: true, require: true, trim: true },
  password: { type: String, required: true },
  passwordConf: { type: String, required: true }
});

userSchema.pre('save', next => {
  const user = this;
  const pwdHash = util.saltHashPassword(user.password);
  user.password = pwdHash.hash;
  user.passwordConf = pwdHash.salt;
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
