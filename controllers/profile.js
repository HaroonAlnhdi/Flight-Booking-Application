const express = require("express");
// auth
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user");
const isOwner = require("../middleware/is-owner");

const router = express.Router();

router.get("/:userId", isOwner, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate({
      path: 'bookings',
      populate: {
        path: 'trip',
        model: 'Trip'
      }
    });
    if (!user) {
      res.status(404);
      throw new Error("Something went wrong");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put("/:userId", isOwner, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:userId", isOwner, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete(
  "/:userId/bookings/:bookingId",
  isOwner,
  async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);
      const booking = user.bookings.id(req.params.bookingId);
      booking.deleteOne();
      await user.save();
      res.status(200).json();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
module.exports = router;
