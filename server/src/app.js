const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoutes = require("./routes/movieRoutes");
const connectDB = require("./config/db");
const logger = require("./utils/logger");
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const roomRoutes = require('./routes/roomRoutes');
const showTimeRoutes = require('./routes/showTimeRoutes')
const cinemaRoutes = require('./routes/cinemaRoutes')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/movies", movieRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/bookings', bookingRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/show-times', showTimeRoutes)
app.use('/api/cinemas', cinemaRoutes)

// Error handling
app.use((err, req, res, next) => {
  logger.logError(err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  logger.logInfo(`Server is running on port ${PORT}`);
});
