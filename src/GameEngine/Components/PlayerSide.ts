import {ComponentInterface} from '../lib/types';

export class PlayerSide implements ComponentInterface {
  name = 'PlayerSide';
  side: -1 | 1;
  
  constructor(side: -1 | 1 = 1) {
    this.side = side;
  }
  
}