import {ComponentInterface} from '../lib/types';

export class Animation implements ComponentInterface{
  name = 'animate';
  
  type: 'idle' | 'moveLeft' | 'moveRight';
  
  constructor(type: 'idle' | 'moveLeft' | 'moveRight' = 'idle') {
    this.type = type;
  }
}