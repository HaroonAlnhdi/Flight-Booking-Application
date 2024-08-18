const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tickets: {
        type: Number,
        required: true,
    },
    depAirport: {
        type: String,
        required: true,
    },
    depAirportIATA: {
        type: String,
        required: true,
    },
    arrAirport: {
        type: String,
        required: true,
    },
    arrAirportIATA: {
        type: String,
        required: true,
    },
    depDate: {
        type: Date,
        required: true,
    },
    arrDate: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tripClass: {
        type: String,
        enum: ['Economy','Business'],
        required: true,
    }
});

const Trip = new mongoose.model('Trip', tripSchema);

module.exports = Trip;