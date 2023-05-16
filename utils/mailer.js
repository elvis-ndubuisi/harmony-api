import dotenv from "dotenv";
dotenv.config();
import logger from "./logger.utils.js";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

let transport = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transport.verify((err, success) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info(`📫 Server is ready to take messages`);
  }
});

/**
 * Sends formatted email to specified address
 * @param {to, subject, , ?html} payload parameters to pass into mailOption
 */
export default async function sendMail(payload) {
  ejs.renderFile(
    path.resolve("templates", "mailtemp.ejs"),
    {
      header: "Uptown Recording Studio",
      name: payload.name,
      email: payload.email,
      type: payload.type,
      message: payload.message,
    },
    (err, data) => {
      if (err) {
        logger.error(err);
      } else {
        let mailOption = {
          from: "harmony",
          to: payload.to,
          subject: payload.subject,
          html: data,
        };

        transport.sendMail(mailOption, (err, info) => {
          if (err) {
            // Log/handle error
            logger.error(`Mail Error: ${err}`);
            return;
          }
          // Log/handle success
          logger.debug(`Message sent:  ${info.messageId}`);
        });
      }
    }
  );
}
