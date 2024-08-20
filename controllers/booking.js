const express = require("express");
const router = express.Router({ mergeParams: true });

const User = require("../models/user");
const Trip = require("../models/Trip");

router.post("/:tripId", async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const tripInfo = await Trip.findById(req.params.tripId);

    if (!tripInfo) {
      throw new Error("Trip not found");
    }
    if (!user) {
      throw new Error("User not found");
    }

    const booking = {
      tickets: req.body,
      dep_airport: tripInfo.dep_airport,
      arr_airport: tripInfo.arr_airport,
      depTripDate: tripInfo.dep_date_time,
      arrTripDate: tripInfo.arr_date_time,
      duration: tripInfo.duration,
      price: tripInfo.price,
    };

    user.bookings.push(booking);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
