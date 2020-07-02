import express, { Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
// setup body parser
app.use(bodyParser.json());

export default app;
