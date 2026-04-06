// server/src/controllers/contactController.js
const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    // ✅ DEBUG: log incoming data
    console.log("Incoming Request Body:", req.body);

    const { fname, lname, email, phoneNo, message } = req.body;

    // ✅ validation
    if (!fname || !lname || !email || !message) {
      console.log("Validation Failed ❌");
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    // ✅ create new contact
    const newContact = new Contact({
      fname,
      lname,
      email,
      phoneNo,
      message,
    });

    // ✅ save to DB
    const savedData = await newContact.save();

    // ✅ DEBUG: log saved data
    console.log("Saved Data:", savedData);

    res.status(201).json({
      message: "Message sent successfully ✅",
      data: savedData,
    });

  } catch (error) {
    console.error("Error in createContact:", error);
    res.status(500).json({ message: "Server error ❌" });
  }
};

exports.getContacts = async (req, res) => {
  try {
    console.log("Fetching all contacts...");

    const contacts = await Contact.find().sort({ createdAt: -1 });

    // ✅ DEBUG: log fetched data
    console.log("Contacts Data:", contacts);

    res.json(contacts);

  } catch (error) {
    console.error("Error in getContacts:", error);
    res.status(500).json({ message: "Server error ❌" });
  }
};