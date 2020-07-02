import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app: Application = express();

// setup morgan
app.use(morgan('dev'));

// setup body parser
app.use(bodyParser.json());

export default app;
