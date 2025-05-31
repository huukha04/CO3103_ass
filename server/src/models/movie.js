const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  ageLimit: {
    type: Number, 
    required: true,
  },
  posterUrl: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Movie", movieSchema);