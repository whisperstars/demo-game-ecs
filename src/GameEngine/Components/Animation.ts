import {ComponentInterface} from '../lib/types';

export class Animation implements ComponentInterface{
  type: 'idle' | 'moveLeft' | 'moveRight';
  
  constructor(type: 'idle' | 'moveLeft' | 'moveRight' = 'idle') {
    this.type = type;
  }
}