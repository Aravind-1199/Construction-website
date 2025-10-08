// api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {


  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }


  const { name, email, message, phone, subject, country } = req.body;

  if (!name || !email || !message || !phone || !subject || !country) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: 'aravindvbs21@gmail.com',
        pass: 'maar oyuj pivc cyvb', // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Om Murugan Temple" <${'aravindvbs21@gmail.com'}>`,  // Your SMTP sender email
      to: 'aravindvbs21@gmail.com',
      replyTo: `${name} <${email}>`, // Reply goes to the visitor's email
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; font-size: 15px; color: #2c3e50; background-color: #f5f6f7; padding: 30px;">
      <table style=" margin: auto; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0; box-shadow: 0 3px 10px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(90deg, #d97706, #b91c1c); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.5px;">Om Murugan Temple</h1>
            <p style="margin: 8px 0 0; font-size: 15px;">📩 New Inquiry Notification</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 30px; line-height: 1.6;">
            <p style="margin: 0 0 15px;">Dear Temple Team,</p>
            <p style="margin: 0 0 25px;">
              A new message has been received via the temple website contact form.  
              Please review the details below:
            </p>

            <table style="width: 100%; border-collapse: collapse; border: 1px solid #f0f0f0;">
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 12px;">${name}</td>
              </tr>
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold;">Email:</td>
                <td style="padding: 12px;">${email}</td>
              </tr>
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold;">Phone:</td>
                <td style="padding: 12px;">${phone}</td>
              </tr>
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold;">City,State:</td>
                <td style="padding: 12px;">${country}</td>
              </tr>
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold;">Subject:</td>
                <td style="padding: 12px;">${subject}</td>
              </tr>
              <tr>
                <td style="background-color: #fef3c7; padding: 12px; font-weight: bold;">Message:</td>
                <td style="padding: 12px;">${message}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Blessing -->
        <tr>
          <td style="padding: 20px 30px; font-size: 14px; color: #555; font-style: italic; text-align: center; border-top: 1px solid #f0f0f0;">
            🕉 May Lord Murugan bless this day with peace, health, and prosperity.
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background: #f3f4f6; padding: 18px; text-align: center; font-size: 12px; color: #6b7280;">
            Om Murugan Temple | Roseville, CA 95678 | USA  
            <br>
            This email was sent automatically by the temple website.
          </td>
        </tr>
      </table>
    </div>
  `,
    };


    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false,
    message: "Something went wrong while sending your message. Please try again later.", });
  }
}