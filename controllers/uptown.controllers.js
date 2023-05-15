import sendMail from "../utils/mailer.js";
import path from "path";

/** Send contact and message to updownstudio
 * Uptownstudio receives email message
 */
export async function contactUptown(req, res) {
  try {
    await sendMail({
      to: "waltzmidas@gmail.com",
      subject: "subject",
      message: "<p>message goes here</p>",
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
  try {
    // await sendMail(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
