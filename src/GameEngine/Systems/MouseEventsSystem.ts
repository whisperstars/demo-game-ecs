import {System} from '../lib/System';
import {Entity} from '../lib/Entity';
import {Animation} from '../Components/Animation';
import {Player} from '../Components/Player';
import {GameEvents} from '../Events/movementEvents';
import {Velocity} from '../Components/Velocity';
import {PlayerSide} from '../Components/PlayerSide';

export class MouseEventsSystem extends System {
  listeners = {
    [GameEvents.mouseStart]: {
      test(entity: Entity) {
        return entity.hasComponents([Player]);
      },
      callback(entity: Entity, data: unknown) {
        entity.addComponent(new Velocity(20 * (data as number)));
        entity.addComponent(new Animation((data as number) > 0 ? 'moveRight' : 'moveLeft'));
        entity.addComponent(new PlayerSide((data as number) > 0 ? 1 : -1));
      }
    },
    [GameEvents.moveStop]: {
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
