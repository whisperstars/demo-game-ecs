import {ComponentInterface} from '../lib/types';

export class Velocity implements ComponentInterface{
  name = 'velocity';
  value: number;
  
  constructor(value: number = 15) {
    this.value = value;
  }
}