const express = require('express');
const db = require('./utils/db');
const userRoutes = require('./routers/userRoutes');
const busRoutes = require('./routers/busRoutes'); 

const app = express();
app.use(express.json());


app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
  res.send('Express + MySQL Server Running');
});



app.listen(4000, () => {
  console.log('Server running on port 4000');
});
