import {ComponentInterface} from '../lib/types';

export class Position implements ComponentInterface{
  x: number;
  y: number;
  
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}
