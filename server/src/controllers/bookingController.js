const Booking = require('../models/booking');
const showTime = require('../models/showTime');

exports.createBookingSession = async (req, res) => {
    try {
        const { movieId, date, time, seatType, cinemaId } = req.body;
        // Tìm suất chiếu phù hợp
        const startTime = new Date(`${date}T${time}`);
        const showTime = await showTime.findOne({
            movie: movieId,
            cinema: cinemaId,
            seatType,
            startTime
        });
        if (!showTime) return res.status(404).json({ message: 'showTime not found' });

        // Tạo phiên đặt vé (chưa cần chọn ghế)
        const bookingSession = {
            showTimeId: showTime._id,
            movieId,
            cinemaId,
            seatType,
            startTime: showTime.startTime,
            price: showTime.price
        };
        res.status(201).json(bookingSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingsByUser = async (req, res) => {
    try {
        const userId = req.user._id || req.params.userId; // lấy từ token hoặc params
        const bookings = await Booking.find({ user: userId })
            .populate('movie')
            .populate('showTime')
            .populate('cinema')
            .sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const { showTimeId, seats } = req.body;
        const showTime = await showTime.findById(showTimeId);
        if (!showTime) return res.status(404).json({ message: 'showTime not found' });

        // Kiểm tra ghế đã được đặt chưa
        const bookedSeats = showTime.seats.filter(seat =>
            seats.includes(seat.code) && seat.isBooked
        );
        if (bookedSeats.length > 0) {
            return res.status(400).json({ message: 'Some seats are already booked', bookedSeats });
        }

        // Đánh dấu ghế đã đặt
        showTime.seats.forEach(seat => {
            if (seats.includes(seat.code)) {
                seat.isBooked = true;
            }
        });
        await showTime.save();

        // Tạo booking
        const booking = new Booking({ ...req.body, user: req.user._id });
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};