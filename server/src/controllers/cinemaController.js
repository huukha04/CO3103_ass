const Cinema = require('../models/cinema');
const showTime = require('../models/showTime');

exports.getCinemaById = async (req, res) => {
    try {
        const cinema = await Cinema.findById(req.params.id);
        if (!cinema) return res.status(404).json({ message: 'Cinema not found' });
        res.json(cinema);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thông tin rạp theo movieId (các rạp có suất chiếu phim này)
exports.getCinemasByMovieId = async (req, res) => {
    try {
        const showTimes = await showTime.find({ movie: req.params.movieId }).populate('cinema');
        const cinemas = showTimes.map(s => s.cinema);
        // Lọc trùng
        const uniqueCinemas = Array.from(new Set(cinemas.map(c => c._id.toString())))
            .map(id => cinemas.find(c => c._id.toString() === id));
        res.json(uniqueCinemas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCinema = async (req, res) => {
    try {
        const { name, address } = req.body;
        const cinema = new Cinema({ name, address });
        await cinema.save();
        res.status(201).json(cinema);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        res.json(cinemas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};