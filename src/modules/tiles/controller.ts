import { Request, Response } from 'express';
import helper from './helper';
export class TileController {
  private storage: Array<string[]> = [];
  constructor() {
    this.storage = helper.generateMatrix(6);
  }
  startGame = (_req: Request, res: Response) => {
    try {
      const { response } = helper;
      return res.status(200).json(response('data', { result: this.storage }));
    } catch (error) {
      const { response } = helper;
      return res.status(500).json(
        response('error', {
          serverError: 'something wrong please try again later',
        }),
      );
    }
  };
}
export default new TileController();
