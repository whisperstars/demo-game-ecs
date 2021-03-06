import {ComponentInterface} from '../../ECS_lib/types';

export class Render implements ComponentInterface {
  x: number;
  y: number;
  width: number;
  height: number;
  sprite: string;
  id: string;
  
  constructor(x = 0, y = 0, width = 1, height = 1, sprite = '', id = '') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.id = id;
  }
}