const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
    depTripDate: {
        type: Date,
        required: true,
    },
    arrTripDate: {
        type: Date,
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
    },
    createdAt: {
        type: Date,
        required: true,
    },
    trip: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Trip',
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    bookings: [bookingsSchema],
    isAdmin: Boolean,
});

const User = mongoose.model('User', userSchema);

module.exports = User;