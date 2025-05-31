const ShowTime = require('../models/showTime');

exports.getSeatsByshowTime = async (req, res) => {
    try {
        const showTimeId = req.params.id;
        const showTime = await ShowTime.findById(showTimeId).select('seats');
        if (!showTime) {
            return res.status(404).json({ message: 'showTime not found' });
        }
        res.json(showTime.seats);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Lấy danh sách ngày có suất chiếu theo movieId
exports.getShowDatesByMovie = async (req, res) => {
    try {
        const showTimes = await ShowTime.find({ movie: req.params.movieId });
        // const dates = Array.from(new Set(showTimes.map(st => st.startTime.toISOString().slice(0, 10))));
        // res.json(dates);
        res.json(showTimes);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy lịch chiếu theo ngày, phân loại ghế
exports.getShowTimesByMovieAndDate = async (req, res) => {
    try {
        const { movieId, date } = req.params;
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);

        const showTimes = await ShowTime.find({
            movie: movieId,
            startTime: { $gte: start, $lt: end }
        });

        // Phân loại theo seatType
        const grouped = {};
        showTimes.forEach(st => {
            if (!grouped[st.seatType]) grouped[st.seatType] = [];
            grouped[st.seatType].push(st);
        });

        res.json(grouped);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createShowTime = async (req, res) => {
    try {
        const { movie, cinema, room, startTime, price, seatType, seats } = req.body;
        // seats là mảng các ghế [{ code: "A1" }, { code: "A2" }, ...]
        const showTime = new ShowTime({
            movie,
            cinema,
            room,
            startTime,
            price,
            seatType,
            seats
        });
        await showTime.save();
        res.status(201).json(showTime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};