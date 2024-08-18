const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tickets: {
        type: Number,
        required: true,
    },
    dep_airport: {
        type: String,
        required: true,
    },
    dep_airport_IATA: {
        type: String,
        required: true,
    },
    arr_airport: {
        type: String,
        required: true,
    },
    arr_airport_IATA: {
        type: String,
        required: true,
    },
    dep_date_time: {
        type: Date,
        required: true,
    },
    arr_date_time: {
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
});

const Trip = new mongoose.model('Trip', tripSchema);

module.exports = Trip;