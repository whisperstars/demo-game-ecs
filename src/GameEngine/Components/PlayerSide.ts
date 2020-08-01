import {ComponentInterface} from '../../ECS_lib/types';

export class PlayerSide implements ComponentInterface {
  side: -1 | 1;
  
  constructor(side: -1 | 1 = 1) {
    this.side = side;
  }
  
}