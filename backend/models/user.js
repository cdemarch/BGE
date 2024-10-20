const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const validator = require('validator');
const Schema = mongoose.Schema


const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be longer than 2 characters'],
    maxlength: [50, 'First name cannot be longer than 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be longer than 2 characters'],
    maxlength: [50, 'Last name cannot be longer than 50 characters'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username must be unique'],
    minlength: [2, 'Username must be longer than 2 characters'],
    maxlength: [50, 'Username cannot be longer than 50 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be longer than 6 characters'],
  },
})

// Static signup method
userSchema.statics.signup = async function (username, password, firstName, lastName){
  // Validation
  if (!username || !password || !firstName || !lastName) {
    throw Error("All fields must be filled in!")
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough!")
  }
  // Check if username exists
  const exists = await this.findOne({ username })

  if (exists) {
    throw Error('Username already in use!');
  }

  // Salt and Hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return await this.create({username, password: hash, firstName, lastName});
}

// Static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields must be filled in!")
  }

  // Check if username exists
  const user = await this.findOne({ username })

  if (!user) {
    throw Error('Incorrect username!');
  }

  // Match passwords
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password!')
  }

  return user;
}

module.exports = mongoose.model('User', userSchema);