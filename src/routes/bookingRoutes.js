const express = require("express");
const router = express.Router();

const { saveBooking } = require("../controllers/bookingController");

router.post("/save", saveBooking);

module.exports = router;