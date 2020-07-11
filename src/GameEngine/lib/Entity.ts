import {
  ComponentInterface,
  EntityId,
  idGenerator,
} from './types';

export class Entity {
  id: EntityId;
  components: Record<ComponentInterface['name'], ComponentInterface>;
  
  constructor(idOrUidGenerator: EntityId | idGenerator, components: Array<ComponentInterface> = []) {
    if (typeof idOrUidGenerator === 'function') {
      this.id = idOrUidGenerator();
    } else {
      this.id = idOrUidGenerator;
    }
    
    this.components = {};
    
    components.forEach((component) => {
      this.addComponent(component);
    })
  }
  
  addComponent(component: ComponentInterface) {
    this.components = {
      ...this.components,
      [component.name]: component,
    };
  }
  
  removeComponent(component: ComponentInterface) {
    if (!this.components[component.name]) {
      return;
    }
    
    delete this.components[component.name];
  
    this.components = {...this.components};
  }
  
  hasComponents(components: Array<ComponentInterface>) {
    return !components.some((component) => {
      return !this.components[component.name];
    });
  }
  
  getComponent(component: ComponentInterface) {
    return this.components[component.name];
  }
}