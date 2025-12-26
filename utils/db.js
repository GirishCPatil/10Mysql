const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookingsystem_db', 'root', 'Girish@21', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');


  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;



// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Girish@21',
//   database: 'bookingsystem_db'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection failed:', err.message);
//     return;
//   }
//   console.log('MySQL connected');
// });

// module.exports = db;