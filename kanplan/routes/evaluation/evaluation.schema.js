var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
  _id : String,
  notes : String,
  files : [String],
  orgId : String
});
