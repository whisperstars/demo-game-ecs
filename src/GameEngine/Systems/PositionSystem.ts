import {System} from '../../ECS_lib/System';
import {Entity} from '../../ECS_lib/Entity';
import {Position} from '../Components/Position';
import {Velocity} from '../Components/Velocity';
import {Player} from '../Components/Player';

export class PositionSystem extends System {

  test(entity: Entity) {
    return entity.hasComponents([Position, Velocity, Player]);
  }
  
  update(entity: Entity) {
    const {x, y} = entity.getComponent(Position);
    const {value: velocity} = entity.getComponent(Velocity);
    
    entity.addComponent(new Position(x + velocity, y));
  }
}
