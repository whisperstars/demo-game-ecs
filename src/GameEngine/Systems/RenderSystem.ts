import {System} from '../../ECS_lib/System';
import {Entity} from '../../ECS_lib/Entity';
import {Position} from '../Components/Position';
import {Sprite} from '../Components/Sprite';
import {Size} from '../Components/Size';
import {Render} from '../Components/Render';

export class RenderSystem extends System {
  
  test(entity: Entity) {
    return entity.hasComponents([Position, Sprite, Size]);
  }
  
  update(entity: Entity) {
    const {x, y} = entity.getComponent(Position);
    const {width, height} = entity.getComponent(Size);
    const {currentIndex, currentSpriteSetType, sprites} = entity.getComponent(Sprite);
    const spriteSet = sprites[currentSpriteSetType || 'idle'];
    
    // TODO: find better solution to get sprite
    if (!spriteSet) {
      throw new Error('There isn\'t spriteSet with type: ' + currentSpriteSetType);
    }
    
    entity.addComponent(new Render(x, y, width, height, spriteSet[currentIndex], entity.id));
  }
}
