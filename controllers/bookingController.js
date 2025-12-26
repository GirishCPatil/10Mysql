const bookingModel = require('../models/bookingModel');

exports.addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const booking = await bookingModel.create({
      userId,
      busId,
      seatNumber
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
