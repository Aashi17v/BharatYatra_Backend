// server/src/routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { createContact, getContacts } = require("../controllers/contactController");

router.post("/", createContact);
router.get("/", getContacts); // optional

module.exports = router;