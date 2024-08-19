const express = require("express");
// auth
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put("/:userId", async (req, res) => {
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

router.delete("/:userId", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
