import {ComponentInterface} from '../../ECS_lib/types';

export class Velocity  implements ComponentInterface{
  value: number;
  
  constructor(value: number = 15) {
    this.value = value;
  }
}