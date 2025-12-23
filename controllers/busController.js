const db = require('../utils/db');

exports.addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const sql = `
    INSERT INTO Buses (busNumber, totalSeats, availableSeats)
    VALUES (?, ?, ?)
  `;

  db.execute(sql, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Bus added successfully');
  });
};

exports.getAvailableBuses = (req, res) => {
  const seats = req.params.seats;

  const sql = 'SELECT * FROM Buses WHERE availableSeats > ?';
  db.execute(sql, [seats], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.json(results.filter(bus => bus.availableSeats > seats));
  });
};
