import {System} from '../../ECS_lib/System';
import {Entity} from '../../ECS_lib/Entity';
import {Animation} from '../Components/Animation';
import {Player} from '../Components/Player';
import {GameEvents} from '../Events/movementEvents';
import {Velocity} from '../Components/Velocity';
import {
  PlayerTurn,
  PlayerTurnType,
} from '../Components/PlayerTurn';

export class MouseEventsSystem extends System {
  listeners = {
    [GameEvents.moveStart]: {
      test(entity: Entity) {
        return entity.hasComponents([Player]);
      },
      callback(entity: Entity, data: unknown) {
        entity.addComponent(new Velocity(20 * (data as number)));
        entity.addComponent(new Animation((data as number) > 0 ? 'moveRight' : 'moveLeft'));
        entity.addComponent(new PlayerTurn((data as number) > 0 ? PlayerTurnType.Right : PlayerTurnType.Left));
      }
    },
    
    [GameEvents.moveStop]: {
      test(entity: Entity) {
        return entity.hasComponents([Player]);
      },
      callback(entity: Entity) {
        entity.removeComponent(Velocity);
        entity.removeComponent(Animation);
      }
    }
  }
}
