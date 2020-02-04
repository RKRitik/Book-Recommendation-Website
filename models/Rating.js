const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RatingSchema = new Schema({
  ratingId : {
  	type:String,
  	required:true,
        unique:true
   },
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
 bookId:{
  type: String,
  required: true
	},
 UserId:{
 type:String,
required:true
	}
 
});

module.exports = Rating = mongoose.model('rating', RatingSchema);
