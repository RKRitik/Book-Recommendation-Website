const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecommendSchema = new Schema({
    userId: {
        type: String,
        required: true
    }
    ,
    categories: {
        type: String,
        required: true
    }
});

module.exports = Recommend = mongoose.model('recommend', RecommendSchema);
