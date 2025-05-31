const express = require('express');
const showTimeController = require('../controllers/showTimeController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMidddleware');
const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, showTimeController.createShowTime);
router.get('/:id/seats', showTimeController.getSeatsByshowTime);
router.get('/movie/:movieId', showTimeController.getShowDatesByMovie);
router.get('/movie/:movieId/date/:date', showTimeController.getShowTimesByMovieAndDate)

module.exports = router;