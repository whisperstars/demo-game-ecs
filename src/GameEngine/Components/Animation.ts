import {ComponentInterface} from '../../ECS_lib/types';
import {SpriteType} from './Sprite';

export type AnimationType = SpriteType;

export class Animation implements ComponentInterface{
  type: AnimationType;
  
  constructor(type: AnimationType = 'idle') {
    this.type = type;
  }
}