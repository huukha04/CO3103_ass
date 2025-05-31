const express = require('express');
const cinemaController = require('../controllers/cinemaController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMidddleware');
const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, cinemaController.createCinema);
router.get('/', cinemaController.getCinemas);
router.get('/:id', cinemaController.getCinemaById);

module.exports = router;