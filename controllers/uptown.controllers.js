import sendMail from "../utils/mailer.js";
import config from "config";

/** Send contact and message to updownstudio
 * Uptownstudio receives email message
 */
export async function contactUptown(req, res) {
  const { subject, name, email, message } = req.body;
  try {
    await sendMail({
      to: config.get("emails.uptownstudio"),
      subject: subject,
      name: name,
      email: email,
      type: "contact",
      message: { message, subject },
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

/** Book a session from uptownstudio website
 * Uptownstudio receives email message
 */
export async function bookSession(req, res) {
  const { name, email, number, service, time, date } = req.body;
  try {
    // await sendMail(req.body);
    await sendMail({
      to: config.get("emails.uptownstudio"),
      subject: "Session Booked",
      name: name,
      email: email,
      type: "booking",
      message: { email, number, service, time, date },
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
