const Booking = require("../models/Booking");
const sendEmail = require("./emailController");

exports.saveBooking = async (req, res) => {
  try {
    const { name, email, destination, amount, persons, paymentId } = req.body;

    // ✅ Save booking to DB
    const newBooking = new Booking({
      name,
      email,
      destination,
      amount,
      persons,
      paymentId,
    });

    await newBooking.save();

    // ✅ SEND EMAIL HERE (IMPORTANT 🔥)
    const emailStatus = await sendEmail({
      name,
      email,
      destination,
      amount,
      persons,
    });

    if (emailStatus) {
      console.log("✅ Booking + Email success");
    } else {
      console.log("⚠️ Booking saved but email failed");
    }

    res.json({ success: true });

  } catch (error) {
    console.log("❌ Booking error:", error);
    res.json({ success: false });
  }
};