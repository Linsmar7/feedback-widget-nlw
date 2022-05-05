import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c94418bfe5767a",
    pass: "a2160a5242f1aa",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Widback <oi@widback.com>",
      to: "Linsmar Vital <linsmarvital@gmail.com>",
      subject,
      html: body,
    });
  }
}
