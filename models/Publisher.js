const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PublisherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  publisherId: {
    type: String,
    required: true,
    unique: true
  
});

module.exports = Publisher = mongoose.model('publisher', PublisherSchema);
