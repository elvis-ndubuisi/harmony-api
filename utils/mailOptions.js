import config from "config";

// const { name, email, subject, message } = req.body;
export function uptownContact(reqBody) {
  return {
    from: `${reqBody.email}`,
    to: `${config.get("mails.uptown")}`,
    subject: `${reqBody.subject}`,
    text: "Hey there, it’s our first message sent with Nodemailer 😉 ",
    html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
  };
}

// const { name, duration, email, phone, session, date } = req.body;
export function uptownSession(reqBody) {
  return {
    from: `${reqBody.email}`,
    to: `${config.get("mails.uptown")}`,
    subject: "Nice Nodemailer test",
    text: "Hey there, it’s our first message sent with Nodemailer 😉 ",
    html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
  };
}
