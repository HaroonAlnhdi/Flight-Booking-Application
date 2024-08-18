const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    airport_name: {
        type: String,
        required: true,
    },
    airport_IATA: {
        type: String,
        required: true,
    }
});

const Airport = new mongoose.model('Airport', airportSchema);

module.exports = Airport;