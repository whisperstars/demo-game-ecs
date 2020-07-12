import {ComponentInterface} from '../lib/types';

export class Sprite implements ComponentInterface {
  name = 'sprite';
  currentIndex: number;
  currentSpriteSetType: 'idle' | 'idleLeft' | 'idleRight' | 'moveLeft'| 'moveRight';
  
  sprites: {idle: Array<string>, moveLeft?: Array<string>, moveRight?: Array<string>, idleLeft?: Array<string>, idleRight?: Array<string>,};
  
  constructor(currentIndex: number, currentSpriteSetType: 'idle' | 'idleLeft' | 'idleRight'  | 'moveLeft'| 'moveRight' = 'idle', sprites: Array<string> | {idle: Array<string>, idleLeft?: Array<string>, idleRight?: Array<string>, moveLeft?: Array<string>, moveRight?: Array<string>}) {
    /*if (!sprites[currentIndex]) {
      throw new Error('there is no sprite with this index {' + currentIndex + '}');
    }*/
    
    this.currentIndex = currentIndex;
    this.currentSpriteSetType = currentSpriteSetType;
    this.sprites = Array.isArray(sprites) ? {idle: sprites} : sprites;
  }
}