import {Entity} from './Entity';
import {EntityId} from './types';
import {fastSplice} from './utils';
import {System} from './System';
import {Render} from '../GameEngine/Components/Render';

export class Engine {
  entities: Array<Entity>;
  systems: Array<System>;
  
  constructor() {
    this.entities = [];
    this.systems = [];
  }
  
  addEntity(entity: Entity) {
    this.entities.push(entity);
    
    this.setEntitiesToSystems();
  }
  
  setEntitiesToSystems() {
    this.systems.forEach((system) => {
      system.entities = this.entities;
    })
  }
  
  removeEntity(entity: Entity) {
    let index = this.entities.indexOf(entity);
    let entityRemoved = null;
  
    if (index !== -1) {
      entityRemoved = this.entities[index];
    
      fastSplice(this.entities, index, 1);
    }
  
    this.setEntitiesToSystems();
  
    return entityRemoved;
  }
  
  removeEntityById(entityId: EntityId) {
    for (let i = 0, entity; entity = this.entities[i]; i += 1) {
      if (entity.id === entityId) {
        
        fastSplice(this.entities, i, 1);
        
        return entity;
      }
    }
  }
  
  addSystem(system: System) {
    this.systems.push(system);
  
    system.entities = this.entities;
  }
  
  removeSystem(system: System) {
    let index = this.systems.indexOf(system);
    
    if (index !== -1) {
      fastSplice(this.systems, index, 1);
    }
  }
  
  update() {
    for (let i = 0, system; system = this.systems[i]; i += 1) {
      for (let j = 0, entity; entity = this.entities[j]; j += 1) {
        if (system.test(entity)) {
          system.update(entity);
        }
      }
    }
  }
  
  fireEvent(event: string, data: unknown) {
    for (let i = 0, system; system = this.systems[i]; i += 1) {
      for (let j = 0, entity; entity = this.entities[j]; j += 1) {
        if (system.listeners && system.listeners[event]) {
          const test = system.listeners[event].test;
          const callback = system.listeners[event].callback;
          
          if (!test || test(entity)) {
            callback(entity, data);
          }
        }
      }
    }
  }
  
  getEntitiesForRender(): Array<{width: number, height: number, x: number, y: number, sprite: string, id: string}> {
    return this.entities.filter((entity) => {
      return entity.hasComponents([Render]);
    }).map((entity) => {
      const rendererComponent = entity.getComponent(Render) as Render;
      
      return {...rendererComponent};
    })
  }
}