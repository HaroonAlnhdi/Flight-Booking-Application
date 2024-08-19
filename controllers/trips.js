const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

router.get('/', async (req, res, next) => {
    try {
        const {dep_airport_IATA, arr_airport_IATA } = req.body;
        const trips = await Trip.find({dep_airport_IATA: dep_airport_IATA, arr_airport_IATA: arr_airport_IATA});
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:tripId', async (req, res, next) => {
    try {
        const trip = await Trip.findById(req.params.tripId);
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

