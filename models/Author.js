const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AuthorSchema = new Schema({
authorId:
{type:String,
required:true
}  
,
   name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  
});

module.exports = Author = mongoose.model('author', AuthorSchema);
