const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, destination, amount, persons }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation 🎉",
      html: `
        <h1 style="color:#4CAF50;">🎉 Booking Confirmed</h1>
        <p>Hello ${name},</p>
        <p>Your trip to <b>${destination}</b> is confirmed!</p>

        <hr/>

        <p><b>Persons:</b> ${persons}</p>
        <p><b>Total Paid:</b> ₹${amount}</p>

        <p>Thank you for choosing <b>BharatYatra</b> ❤️</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent:", info.response);

  } catch (error) {
    console.log("❌ Email Error:", error.message);
    throw error;
  }
};

module.exports = sendMail;