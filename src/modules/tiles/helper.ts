import { IGenerateResponse } from './types';

export class TilesHelper {
  setRandomColor = (): string => {
    const colorSign = '#';
    const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor = `${colorSign}${randomNumber}`;
    return randomColor;
  };
  
  shuffle =(arr: Array<string>) =>{
    for(let i=arr.length-1; i>0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  generateMatrix = (value: number) => {
    const result: Array<string[]> = [];
    let i: number = 0;
    const colors: Array<string> = [];
    for(let c=0; c<value/2; c++){colors.push(this.setRandomColor())}
    for (i; i < value; i++) {
      result.push(colors.reverse().concat(this.shuffle(colors)));
    }
    return {
      result, colors
    };
  };

  response = <T>(property: string, data: T): IGenerateResponse => {
    return {
      [property]: data,
    };
  };
}
export default new TilesHelper();
