const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('User', userSchema);
