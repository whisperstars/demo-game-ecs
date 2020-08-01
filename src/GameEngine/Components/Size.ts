import {ComponentInterface} from '../../ECS_lib/types';

export class Size implements ComponentInterface {
  width: number;
  height: number;
  
  constructor(width: number = 1, height: number = 1) {
    this.width = width;
    this.height = height;
  }
}