import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

class Email {
  static send = async (senderName, sendTo, subject, text, html ) =>{
    try {
    const transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
        user: process.env.Email_User,
        pass: process.env.Password_User,
      }
    }));

    const mailOptions = {
      from: `${senderName} <noreply@gmail.com>`,
      to: sendTo,
      subject,
      text,
      html, 
    };

  const email =  await transporter.sendMail(mailOptions);
    return email;

   
  } catch (error) {
    throw error;
  }
}
}
export default Email;