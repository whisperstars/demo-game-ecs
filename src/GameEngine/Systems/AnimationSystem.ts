import {System} from '../../ECS_lib/System';
import {Entity} from '../../ECS_lib/Entity';
import {Sprite} from '../Components/Sprite';
import {Animation} from '../Components/Animation';
import {
  PlayerTurn,
  PlayerTurnType,
} from '../Components/PlayerTurn';

export class AnimationSystem extends System {
  test(entity: Entity) {
    if (entity.hasComponents([Sprite, Animation])) {
      return true;
    } else {
      // TODO: remove when leave method will be implemented in core for Systems
      this.leave(entity);
      
      return false;
    }
  }
  
  update(entity: Entity) {
    const {currentIndex, sprites} = entity.getComponent(Sprite);
    const {type} = entity.getComponent(Animation);
    const spriteSet = sprites[type];
    
    if (!spriteSet) {
      throw new Error('there aren\'t spriteSet with type: {' + type + '}');
    }
    
    const nextSprite = spriteSet.length > currentIndex + 1 ? currentIndex + 1 : 0;
    
    entity.addComponent(new Sprite(nextSprite, type, sprites));
  }
  
  leave(entity: Entity) {
    if (entity.hasComponents([Sprite])) {
      const {sprites} = entity.getComponent(Sprite);
      if (entity.hasComponents([PlayerTurn])) {
        const {turn} = entity.getComponent(PlayerTurn);
        entity.addComponent(new Sprite(0, turn === PlayerTurnType.Right ? 'idleRight' : 'idleLeft', sprites));
      } else {
        entity.addComponent(new Sprite(0, 'idle', sprites));
      }
    }
  }
}
