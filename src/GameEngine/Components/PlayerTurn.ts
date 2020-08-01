import {ComponentInterface} from '../../ECS_lib/types';

export enum PlayerTurnType {
  Right = 'right',
  Left = 'left',
}

export class PlayerTurn implements ComponentInterface {
  turn: PlayerTurnType;
  
  constructor(turn: PlayerTurnType = PlayerTurnType.Right) {
    this.turn = turn;
  }
  
}