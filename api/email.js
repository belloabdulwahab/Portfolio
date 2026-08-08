import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitize = (value) =>
  typeof value === "string"
    ? value.trim().replace(/\r/g, "").replace(/\0/g, "")
    : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "This request method is not supported.",
    });
  }

  try {
    const body = req.body;

    if (!body || typeof body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid form submission.",
      });
    }

    const allowedFields = [
      "name",
      "email",
      "title",
      "message",
      "website",
    ];

    const receivedFields = Object.keys(body);

    const hasUnexpectedField = receivedFields.some(
      (field) => !allowedFields.includes(field)
    );

    if (hasUnexpectedField) {
      return res.status(400).json({
        success: false,
        message: "Invalid form submission.",
      });
    }

    let {
      name,
      email,
      title,
      message,
      website,
    } = body;

    // Honeypot spam protection
    if (website) {
      return res.status(400).json({
        success: false,
        message: "Spam submission detected.",
      });
    }

    name = sanitize(name);
    email = sanitize(email);
    title = sanitize(title);
    message = sanitize(message);

    // Required fields
    if (!name || !email || !title || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Name validation
    if (name.length < 5 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Your name must be between 5 and 50 characters.",
      });
    }

    // Project title validation
    if (title.length < 5 || title.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Your project title must be between 5 and 100 characters.",
      });
    }

    // Email validation
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const { error } = await resend.emails.send({
      from: `Bello Abdulwahab Portfolio <${process.env.FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Portfolio Inquiry: ${title}`,
      text: `
You have received a new inquiry from your portfolio website.

━━━━━━━━━━━━━━━━━━━━

Name:
${name}

Email:
${email}

Project Title:
${title}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━

Sent from:
https://belloabdulwahab.dev
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message:
          "We couldn't send your message right now. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Thanks for reaching out! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Email API error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while sending your message. Please try again later.",
    });
  }
}