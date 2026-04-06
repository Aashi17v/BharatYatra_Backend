const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Existing Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

// 🔥 NEW Routes (Payment + Booking)
const paymentRoutes = require("./routes/paymentRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// ✅ ADD THIS 👇 (NEW)
const emailRoutes = require("./routes/emailRoutes");

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// 🔥 NEW ROUTES
app.use("/api/payment", paymentRoutes);
app.use("/api/booking", bookingRoutes);

// ✅ ADD THIS 👇 (NEW)
app.use("/api", emailRoutes);

// ✅ DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error ❌", err));

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});