const express = require('express');
const MovieController = require('../controllers/movieController');
const Movie = require('../models/movie')
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware')
const adminMiddleware = require('../middlewares/adminMidddleware')

const router = express.Router();
const movieController = new MovieController(Movie);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/', authMiddleware, adminMiddleware, upload.single('poster'), movieController.createMovie.bind(movieController));
// router.post('/', movieController.createMovie.bind(movieController));
router.get('/', movieController.getMovies.bind(movieController));
router.get('/:id', movieController.getMovieById.bind(movieController));
router.put('/:id', authMiddleware, adminMiddleware, movieController.updateMovie.bind(movieController));
router.delete('/:id', authMiddleware, adminMiddleware, movieController.deleteMovie.bind(movieController));

module.exports = router;