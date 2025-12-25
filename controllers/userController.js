const db = require('../utils/db');
const UserModel = require('../models/userModel');

exports.addUser = async (req, res) => {

  try {
    const { name, email } = req.body;

    const User = await UserModel.create({ name, email });
    res.status(201).json({message:"added User susccesfully",User});

  } catch (error) {
    res.status(500).send(error.message);
  }
  // const { name, email } = req.body;

  // const sql = 'INSERT INTO Users (name, email) VALUES (?, ?)';
  // db.execute(sql, [name, email], (err) => {
  //   if (err) return res.status(500).send(err.message);
  //   res.send('User added successfully');
  // });
};

exports.getAllUsers = (req, res) => {
  try {
    UserModel.findAll().then(users => {
      res.json(users);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
  // const sql = 'SELECT * FROM Users';
  // db.execute(sql, (err, results) => {
  //   if (err) return res.status(500).send(err.message);
  //   res.json(results);
  // });
};
