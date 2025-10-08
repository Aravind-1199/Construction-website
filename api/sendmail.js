// /api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, projectType, budget, timeline, message } = req.body;

  if (!name || !email || !message || !phone || !projectType) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aravindvbs21@gmail.com",
        pass: "vtuj apho mope qkda", // Gmail App Password (keep this secret)
      },
    });

    const mailOptions = {
      from: `"Amman Construction" <aravindvbs21@gmail.com>`,
      to: "aravindvbs21@gmail.com",
      replyTo: `${name} <${email}>`,
      subject: `New Construction Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial, sans-serif;padding:20px;background:#f8f9fa;">
          <h2 style="color:#2563eb;">🏗️ New Construction Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Project Type:</b> ${projectType}</p>
          <p><b>Budget:</b> ${budget || "N/A"}</p>
          <p><b>Timeline:</b> ${timeline || "N/A"}</p>
          <p><b>Message:</b><br>${message}</p>
          <hr>
          <p style="font-size:13px;color:#555;">This email was sent from your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message. Please try again later.",
    });
  }
}
