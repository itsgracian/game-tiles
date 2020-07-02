import * as express from 'express';
import tileCtrl from './controller';
const app = express.Router();

app.get('/start-game', tileCtrl.startGame);

export default app;
