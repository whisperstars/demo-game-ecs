import {ComponentInterface} from '../../ECS_lib/types';

export class Animation implements ComponentInterface{
  type: 'idle' | 'moveLeft' | 'moveRight';
  
  constructor(type: 'idle' | 'moveLeft' | 'moveRight' = 'idle') {
    this.type = type;
  }
}