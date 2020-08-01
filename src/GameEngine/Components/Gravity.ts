import {ComponentInterface} from '../../ECS_lib/types';

export class Gravity implements ComponentInterface{
  value: number;
  
  constructor(value: number = 9.8) {
    this.value = value;
  }
}