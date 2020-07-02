import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './modules/tiles/routes';

const app: Application = express();

// setup morgan
app.use(morgan('dev'));

// setup body parser
app.use(bodyParser.json());

// routes setup
app.use('/api', routes);

export default app;
