const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GenreSchema = new Schema({
  genreId:{
     type: String,
     required:true
	},
  name: {
    type: String,
    required: true
  }
});

module.exports = Genre = mongoose.model('genre', UserSchema);
