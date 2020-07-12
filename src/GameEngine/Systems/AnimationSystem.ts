import {System} from '../lib/System';
import {Entity} from '../lib/Entity';
import {Sprite} from '../Components/Sprite';
import {Animation} from '../Components/Animation';
import {PlayerSide} from '../Components/PlayerSide';

export class AnimationSystem extends System {
  test(entity: Entity) {
    if (entity.hasComponents([Sprite, Animation])) {
      return true;
    } else {
      if (entity.hasComponents([Sprite])) {
        const {sprites} = <Sprite>entity.getComponent(Sprite);
        if (entity.hasComponents([PlayerSide])) {
          const {side} = <PlayerSide>entity.getComponent(PlayerSide);
          entity.addComponent(new Sprite(0, side > 0 ? 'idleRight' : 'idleLeft', sprites));
        } else {
          entity.addComponent(new Sprite(0, 'idle', sprites));
        }
      }
      
      return false;
    }
  }
  
  update(entity: Entity) {
    const {currentIndex, sprites} = <Sprite>entity.getComponent(Sprite);
    const {type} = <Animation>entity.getComponent(Animation);
    
    if (!sprites[type]) {
      throw new Error('there isn\'t spriteSheet with type: {' + type + '}');
    }
    
    // @ts-ignore
    const nextSprite = sprites[type].length > currentIndex + 1 ? currentIndex + 1 : 0;
    
    entity.addComponent(new Sprite(nextSprite, type, sprites));
  }
}
