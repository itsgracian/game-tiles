import { IGenerateResponse } from './types';

export class TilesHelper {
  setRandomColor = (): string => {
    const colorSign = '#';
    const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor = `${colorSign}${randomNumber}`;

    return randomColor;
  };

  generateMatrix = (rows: number, columns: number) => {
    const result: Array<string[]> = [];
    let i: number = 0;
    for (i; i < columns; i++) {
      result.push(new Array(rows).fill('red'));
    }
    return result;
  };

  response = <T>(property: string, data: T): IGenerateResponse => {
    return {
      [property]: data,
    };
  };
}
export default new TilesHelper();
