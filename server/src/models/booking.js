const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    seats: [{ type: String, required: true }], 
    showTime: { type: mongoose.Schema.Types.ObjectId, required: true },
    voucher: { type: mongoose.Schema.Types.ObjectId, ref: 'Voucher' },
    totalPrice: { type: Number, required: true },
    serviceFee: { type: Number, required: true }, 
    paymentMethod: { 
        type: String, 
        enum: ['cash', 'credit_card', 'momo', 'zalo_pay'], 
        required: true 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);