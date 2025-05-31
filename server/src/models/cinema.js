const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Cinema', cinemaSchema);