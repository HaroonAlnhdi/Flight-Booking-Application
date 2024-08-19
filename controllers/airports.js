const express = require('express');

const Airport = require('../models/Airport.js');

const router = express.Router();


router.get('/', async (req, res, next) => {
    try{
        const airports = await Airport.find();
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;