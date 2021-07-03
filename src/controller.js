import Email from "./email";

const sendEmail = async  (req,res,next) => {
try {
  const {senderName, sendTo, subject, text, html } = req.body;

const email = await Email.send(senderName, sendTo, subject, text, html);
console.log({email});
if(email && email.messageId){
return res.status(200).json({
  status: 'success',
  message:'Email sent successfully.'
})
}
return res.status(400).json({
  status: 'error',
  message:'Email not sent.'
})

} catch (error) {
  next(error);
}
}
export {sendEmail}