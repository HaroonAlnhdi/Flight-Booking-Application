const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

require("./config/database");
const express = require("express");

// Auth
const verifyToken = require("./middleware/verify-token");
const isOwner = require("./middleware/is-owner");

// Controllers
const testJWTRouter = require("./controllers/test-jwt");
const usersRouter = require("./controllers/users");
const airportController = require("./controllers/airports");
const tripController = require("./controllers/trips");
const profileController = require("./controllers/profile");
const bookingController = require("./controllers/booking");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
// Public
app.use("/test-jwt", testJWTRouter);
app.use("/users", usersRouter);
app.use("/airports", airportController);
app.use("/trips", tripController);

// Private
app.use(verifyToken);
app.use("/profile", profileController);
app.use("/booking", bookingController);

app.listen(PORT, () => {
  console.log("The express app is ready!");
});
