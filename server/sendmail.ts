import nodemailer from 'nodemailer';
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req: Request, res: Response) => {
  const { name, email, phone, company, projectType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'aravindvbs21@gmail.com',
        pass: 'maar oyuj pivc cyvb', // Use App Password
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'aravindvbs21@gmail.com', // your receiving email
      subject: `New Project Inquiry: ${projectType}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      
      <!-- Header with gradient -->
      <div style="
        background: linear-gradient(to right, #22c55e, #3b82f6); 
        background-color: #22c55e; /* fallback for clients that don’t support gradient */
        color: #fff; 
        padding: 20px; 
        text-align: center;
      ">
        <h1 style="margin: 0; font-size: 24px;">New Project Inquiry</h1>
      </div>

      <!-- Body -->
      <div style="padding: 20px;">
        <p>Hello,</p>
        <p>You have received a new project inquiry. Details are below:</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone || '-'}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company || '-'}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Project Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${projectType || '-'}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Budget</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${budget || '-'}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Message</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px;">Please respond to the client as soon as possible.</p>
      </div>

      <!-- Footer -->
      <div style="background: #f5f5f5; color: #555; padding: 10px; text-align: center; font-size: 12px;">
        Amman Construction &copy; ${new Date().getFullYear()}
      </div>

    </div>
  `
    };



    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
