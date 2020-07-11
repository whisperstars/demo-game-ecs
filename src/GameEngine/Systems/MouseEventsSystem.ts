import {System} from '../lib/System';
import {Entity} from '../lib/Entity';
import {Sprite} from '../Components/Sprite';
import {Animation} from '../Components/Animation';
import {Player} from '../Components/Player';
import {GameEvents} from '../Events/movementEvents';
import {Velocity} from '../Components/Velocity';

export class MouseEventsSystem extends System {
  listeners = {
    [GameEvents.mouseDown]: {
      test(entity: Entity) {
        return entity.hasComponents([Player]);
      },
      callback(entity: Entity, data: unknown) {
        entity.addComponent(new Velocity(15 * (data as number)));
        entity.addComponent(new Animation((data as number) > 0 ? 'moveRight' : 'moveLeft'));
      }
    },
    [GameEvents.mouseUp]: {
      test(entity: Entity) {
        return entity.hasComponents([Player]);
      },
      callback(entity: Entity, data: unknown) {
        entity.removeComponent(Velocity);
        entity.removeComponent(Animation);
      }
    }
  }
}
