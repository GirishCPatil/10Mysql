const db = require('../utils/db');

exports.addUser = (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO Users (name, email) VALUES (?, ?)';
  db.execute(sql, [name, email], (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('User added successfully');
  });
};

exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM Users';
  db.execute(sql, (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.json(results);
  });
};
