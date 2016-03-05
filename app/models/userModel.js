// User Data for login details

var  mongoose = require('mongoose'),
  Schema = mongoose.Schema

// User Model
  userSchema = new Schema({
    userName: {type: String, required: true},
    artistName: {type: String, required: true},
    profileImg: {type: String, required: true},
  })


// Export
  module.exports = {
  User: mongoose.model('User', userSchema),
}
