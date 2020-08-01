import {ComponentInterface} from '../lib/types';

export class Velocity  implements ComponentInterface{
  value: number;
  
  constructor(value: number = 15) {
    this.value = value;
  }
}