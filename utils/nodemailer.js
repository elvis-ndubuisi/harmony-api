import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
  host: "",
  port: "",
  auth: { user: "", pass: "" },
  service: "",
});

transport.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    // Log: Server ready to take messages
  }
});

/**
 * Sends formatted email to specified address
 * @param {to, subject, text, url} payload parameters to pass into mailOption
 */
export default async function sendMail(mailOption) {
  transport.sendMail(mailOption, (err, info) => {
    if (err) {
      // Log/handle error
      return;
    }
    // Log/handle success
  });
}
