const db = require('../utils/db');
const BusModel = require('../models/busModel');
const Booking = require('../models/bookingModel');
const User = require('../models/UserModel');

exports.addBus = (req, res) => {

  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const Bus =  BusModel.create({ busNumber, totalSeats, availableSeats });
    res.status(201).json({message:"added Bus susccesfully",Bus});
  } catch (error) {
    res.status(500).send(error.message);
  }
  // const { busNumber, totalSeats, availableSeats } = req.body;

  // const sql = `
  //   INSERT INTO Buses (busNumber, totalSeats, availableSeats)
  //   VALUES (?, ?, ?)
  // `;

  // db.execute(sql, [busNumber, totalSeats, availableSeats], (err) => {
  //   if (err) return res.status(500).send(err.message);
  //   res.send('Bus added successfully');
  // });
};

exports.getAvailableBuses =async (req, res) => {

  try {
    const seats = req.params.seats;
    const buses  = await BusModel.findAll();
    buses = buses.filter(bus => bus.availableSeats > seats);
    res.json(buses);
  }
     catch (error) {
    res.status(500).send(error.message);
  }
  // const seats = req.params.seats;

  // const sql = 'SELECT * FROM Buses WHERE availableSeats > ?';
  // db.execute(sql, [seats], (err, results) => {
  //   if (err) return res.status(500).send(err.message);
  //   res.json(results.filter(bus => bus.availableSeats > seats));
  // });
};



exports.getBusBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { busId: req.params.id },
      include: {
        model: User,
        attributes: ['name', 'email']
      }
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
