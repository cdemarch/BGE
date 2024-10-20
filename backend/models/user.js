// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Signup static method
userSchema.statics.signup = async function(username, password, firstName, lastName) {
  // Check if username already exists
  const exists = await this.findOne({ username });
  if (exists) throw Error('Username already in use.');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, password: hash, firstName, lastName });
  return user;
};

// Login static method
userSchema.statics.login = async function(username, password) {
  const user = await this.findOne({ username });
  if (!user) throw Error('Incorrect username.');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error('Incorrect password.');

  return user;
};

module.exports = mongoose.model('User', userSchema);
