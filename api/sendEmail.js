import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("ENV TEST:", {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
    TARGET_EMAIL: process.env.TARGET_EMAIL,
  });

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.TARGET_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({
      message: "Error sending message",
      error: err.message,
    });
  }
}
