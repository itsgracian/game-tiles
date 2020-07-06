import { IGenerateResponse } from './types';
import lodash from 'lodash';
export class TilesHelper {
  setRandomColor = (): string => {
    const colorSign = '#';
    const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor = `${colorSign}${randomNumber}`;
    return randomColor;
  };

  shuffle = (arr: Array<string>) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  generateMatrix = (value: number) => {
    const result: Array<string[]> = [];
    let i: number = 0;
    const colors: Array<string> = [];
    for (let c = 0; c < value / 2; c++) {
      colors.push(this.setRandomColor());
    }
    for (i; i < value; i++) {
      result.push(colors.reverse().concat(this.shuffle(colors)));
    }
    return {
      result,
      colors,
    };
  };

  response = <T>(property: string, data: T): IGenerateResponse => {
    return {
      [property]: data,
    };
  };

  findColor = (result: Array<string[]>, color: string)=>{
    const map: Array<string> = [];
    const divider: Array<string> = [];
    const origins: Array<string> = [];
    const upperLeftCorner:number = 0;
    for(let i =0; i<result.length; i++){
      for(let j=0; j<result[i].length; j++){
          map.push(result[i][j]);
      }
    }
    // divid length of map to 4
    if(map.length>0){
      const find = lodash.filter(map,(o)=> (o==color));
      console.log(find);
    }
  }
}
export default new TilesHelper();
