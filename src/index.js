import express from 'express';
import Router from './router';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const PORT = 8000;

dotenv.config({path:'./userConfig.env'});
const app = express();
const router = express.Router();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
  {extended:true}
));

app.use('/',Router(router));

app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode;
  const message = err.message;

  return res
    .status(statusCode)
    .json({
      status: 'error',
      statusCode,
      message,
    });
});

app.listen(PORT,()=>{
  console.log(`Server up and running on ▶️  ${PORT} ◀️`);
});