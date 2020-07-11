import {Entity} from './Entity';
import {SystemInterface} from './types';

export class System implements SystemInterface {
  entities: Array<Entity>;
  listeners?: Record<string, {test?: (entity: Entity) => boolean, callback: <D>(entity: Entity, data: D) => void}>;
  
  constructor() {
    this.entities = [];
  }
  
  addEntity(entity: Entity) {
    this.entities.push(entity);
  }
  
  test(entity: Entity) {
    return false;
  }
  
  update(entity: Entity) {
    throw new Error('doesn\'t implemented');
  }
}