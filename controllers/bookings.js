const express  = require('express');
const router = express.Router({mergeParams: true});

const User = require('../models/user');
const Trip = require('../models/Trip');

router.post('/', async (req, res, next) => {
    try {
        const user = await  User.findById(req.user._id);
        const tripInfo = await Trip.findById(req.params.tripId);
        if (!tripInfo) {
            throw new Error('Something went yikes');
        } 
        if (!user) {
            throw new Error('Something went wrong');
        } 
        const booking = {
            depTripDate: tripInfo.dep_date_time,
            arrTripDate: tripInfo.arr_date_time,
            price: tripInfo.price,
            trip: tripInfo._id
        };
        tripInfo.tickets = tripInfo.tickets - 1;
        user.bookings.push(booking);
        await user.save();
        await tripInfo.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;