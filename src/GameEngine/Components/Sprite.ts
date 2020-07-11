import {ComponentInterface} from '../lib/types';

export class Sprite implements ComponentInterface {
  name = 'sprite';
  currentIndex: number;
  sprites: Array<string>;
  
  constructor(currentIndex: number, sprites: Array<string>) {
    if (!sprites[currentIndex]) {
      throw new Error('there is no sprite with this index {' + currentIndex + '}');
    }
    
    this.currentIndex = currentIndex;
    this.sprites = sprites;
  }
}