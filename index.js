const express = require('express');
const sequelize = require('./utils/db');
const userRoutes = require('./routers/userRoutes');
const busRoutes = require('./routers/busRoutes'); 

const app = express();
app.use(express.json());


app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
  res.send('Express + MySQL Server Running');
});


sequelize.sync()
  .then(() =>{ 
    console.log('All models synced')
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
  }).catch(err => console.error(err));




