const express = require('express');
const {addUser,getAllUsers,getUserBookings} = require('../controllers/userController');

const router = express.Router();

router.post('/add', addUser);
router.get('/', getAllUsers);
router.get('/:id/bookings', getUserBookings);

module.exports = router;
