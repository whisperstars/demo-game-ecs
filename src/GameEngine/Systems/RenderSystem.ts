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
    
    // @ts-ignore
    entity.addComponent(new Render(x, y, width, height, sprites[currentSpriteSetType || 'idle'][currentIndex], entity.id));
  }
}
