import Email from "./email";

const sendEmail = async  (req,res,next) => {
try {
  const {senderName, sendTo, subject, text, html } = req.body;

const email = await Email.send(senderName, sendTo, subject, text, html);
console.log({email});
if(email && email[0] && email[0].statusCode && email[0].statusCode === 202){
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

const sendTestEmail = async  (req,res,next) => {
  try {
  
  const email = await Email.send('ABCD', 'nihcas101@gmail.com', 'This is testing email for all users', 'Hello dude what\' up? ...', '<h1>Hello</h1>');
  if(email && email[0] && email[0].statusCode && email[0].statusCode === 202){
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
export {sendEmail, sendTestEmail}