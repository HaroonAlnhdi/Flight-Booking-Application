const express  = require('express');
const router = express.Router();

const User = require('../models/user');
const Trip = require('../models/Trip');

router.post('/', async (req, res, next) => {
    try {
        const user = await  User.findById(req.user._id);
        const tripInfo = await Trip.findById(req.params.tripId);
        if (!trip || !user) {
            throw new Error('Something went wrong');
        } 
        const booking = {
            depTripDate: tripInfo.dep_date_time,
            arrTripDate: tripInfo.arr_date_time,
            price: tripInfo.price,
            trip: tripInfo._id
        };
        user.bookings.push(booking);
        await user.save();
        res.status(204).json();
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;