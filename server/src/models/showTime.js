const mongoose = require('mongoose');
const cinema = require('./cinema');

const seatSchema = new mongoose.Schema({
    code: { type: String, required: true }, // VD: "A1"
    isBooked: { type: Boolean, default: false },
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' } // Nếu muốn biết ai đã đặt
});

const showTimeSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true }, // hoặc ref tới model Room nếu có
    startTime: { type: Date, required: true },
    seats: [seatSchema], // Danh sách ghế, hoặc trạng thái ghế
    price: { type: Number, required: true }
});

module.exports = mongoose.model('showTime', showTimeSchema);