const express = require('express');
const {addBus , getAvailableBuses,getBusBookings}= require('../controllers/busController');

const router = express.Router();

router.post('/', addBus);
router.get('/available/:seats', getAvailableBuses);
router.get('/:id/bookings', getBusBookings);

module.exports = router;
