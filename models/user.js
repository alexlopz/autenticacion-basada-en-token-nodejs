var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema =  new Schema({
  nombre:   { type: String, required: true, index: { unique:true }},
  email:    { type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  token: String

});

module.exports = mongoose.model('User', userSchema);
