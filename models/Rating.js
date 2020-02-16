const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RatingSchema = new Schema({
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  },
  bookId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }

});

module.exports = Rating = mongoose.model('rating', RatingSchema);
