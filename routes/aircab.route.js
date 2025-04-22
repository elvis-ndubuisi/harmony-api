import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  const {
    first_name: fName,
    last_name: lName,
    email_address: em,
    phone_number: ph,
    city: ct,
    message: msg,
  } = req.body;

  //   sanitize input
  const sanitizedFirstName = fName.replace(/<[^>]*>/g, "");
  const sanitizedLastName = lName.replace(/<[^>]*>/g, "");
  const sanitizedMessage = msg.replace(/<[^>]*>/g, "");
  const sanitizedPhone = ph.replace(/<[^>]*>/g, "");
  const sanitizedEmail = em.replace(/<[^>]*>/g, "");
  const sanitizedCity = ct.replace(/<[^>]*>/g, "");

  const sanitizedData = {
    first_name: sanitizedFirstName,
    last_name: sanitizedLastName,
    message: sanitizedMessage,
    phone: sanitizedPhone,
    email: sanitizedEmail,
    city: sanitizedCity,
  };
  const { first_name, last_name, message, phone, email, city } = sanitizedData;

  try {
    const { data, error } = await resend.emails.send({
      from: "",
      to: "info@aircabservices.com",
      subject: `Contact Form Submission from ${first_name}`,
      html: `<p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res
      .status(200)
      .json({ message: "Email sent successfully", success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
