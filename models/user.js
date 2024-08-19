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
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  bookings: [bookingsSchema],
  isAdmin: {
    type: Boolean,
    default: false
  },
});

userSchema.set('toJSON', {
    transform: (doc, obj) => {
      delete obj.hashedPassword;
    },
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
