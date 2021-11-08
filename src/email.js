import sendGridMailer from '@sendgrid/mail';

class Email {
  static send = async (senderName, sendTo, subject, text, html ) =>{
    try {
    sendGridMailer.setApiKey(process.env.SENDGRID_PASSWORD)

    const mailOptions = {
      from: `${senderName} <sachinbhattarai.404@gmail.com>`,
      to: sendTo,
      subject,
      text,
      html, 
    };

    const email =  await sendGridMailer.send(mailOptions);
    return email;
  } catch (error) {
    console.log('Error = ', error);
    throw error;
  }
}
}
export default Email;