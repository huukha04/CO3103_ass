const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    code: { type: String, required: true }
});

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true },
    seats: [seatSchema] // sơ đồ ghế của phòng
});

module.exports = mongoose.model('Room', roomSchema);