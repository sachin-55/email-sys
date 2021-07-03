import {sendEmail} from './controller';
const Router = (router) =>{
  router.get('/',(req,res,next)=>{
    res.send('This is a simple message sending module using node mailer for Testing / Development purpose only.');
  });

  router.post('/send-email',sendEmail);

  return router;
}
export default Router;