const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, destination, amount, persons }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation 🎉",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f8; padding: 30px;">
          
          <div style="max-width: 520px; margin: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; overflow: hidden;">
            
            <!-- HEADER -->
            <div style="background-color: #2c3e50; padding: 18px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">
                🎉 Booking Confirmation
              </h2>
            </div>

            <!-- BODY -->
            <div style="padding: 25px; color: #333;">

              <p style="font-size: 14px; margin-bottom: 10px;">
                Dear <strong>${name}</strong>,
              </p>

              <p style="font-size: 14px; color: #555;">
                Your booking has been successfully confirmed. Below are your booking details:
              </p>

              <!-- DETAILS TABLE (FIXED) -->
              <div style="margin-top: 20px; border: 1px solid #ddd; border-radius: 6px; overflow: hidden;">
                
                <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; font-size: 14px;">
                  
                  <tr>
                    <td style="padding: 10px 15px; border-bottom: 1px solid #eee;">
                      Destination:
                    </td>
                    <td style="padding: 10px 15px; border-bottom: 1px solid #eee; text-align: right;">
                      <strong>${destination}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 15px; border-bottom: 1px solid #eee;">
                      Travellers:
                    </td>
                    <td style="padding: 10px 15px; border-bottom: 1px solid #eee; text-align: right;">
                      <strong>${persons}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 15px;">
                      Total Amount:
                    </td>
                    <td style="padding: 10px 15px; text-align: right;">
                      <strong>₹${amount}</strong>
                    </td>
                  </tr>

                </table>

              </div>

              <p style="margin-top: 20px; font-size: 14px; color: #555;">
                Thank you for choosing our service. We wish you a pleasant journey.
              </p>

              <p style="margin-top: 25px; font-size: 14px;">
                Regards,<br/>
                <strong>Bharat Yatra Team</strong>
              </p>

            </div>

          </div>

        </div>
      `,
    });

    console.log("✅ Email sent successfully");
    return true;

  } catch (error) {
    console.log("❌ Email error:", error);
    return false;
  }
};

module.exports = sendEmail;