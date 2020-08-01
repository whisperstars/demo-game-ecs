import {ComponentInterface} from '../../ECS_lib/types';
import {PartialRecord} from '../../ts/types';

export type SpriteType = 'idle' | 'idleLeft' | 'idleRight' | 'moveLeft'| 'moveRight';
export type SpriteRecord = PartialRecord<SpriteType, Array<string>>;

export class Sprite implements ComponentInterface {
  currentIndex: number;
  currentSpriteSetType: SpriteType;
  
  sprites: SpriteRecord;
  
  constructor(currentIndex: number, currentSpriteSetType: SpriteType = 'idle', sprites: Array<string> | SpriteRecord) {
    this.currentIndex = currentIndex;
    this.currentSpriteSetType = currentSpriteSetType;
    this.sprites = Array.isArray(sprites) ? {idle: sprites} : sprites;
  }
}
