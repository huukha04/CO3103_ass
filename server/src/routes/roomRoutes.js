const express = require('express');
const roomController = require('../controllers/roomController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMidddleware');
const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, roomController.createRoom);
router.get('/', roomController.getRooms);
router.get('/:id', roomController.getRoomById);

module.exports = router;