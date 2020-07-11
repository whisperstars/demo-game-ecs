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
    // @ts-ignore
    const cmp = new component;
    
    if (!this.components[cmp.name]) {
      return;
    }
    
    delete this.components[cmp.name];
  
    this.components = {...this.components};
  }
  
  hasComponents(components: Array<ComponentInterface>) {
    return !components.some((component) => {
      // @ts-ignore
      const cmp = new component;
      
      return !this.components[cmp.name];
    });
  }

  getComponent<C>(component: ComponentInterface): C {
    // @ts-ignore
    const cmp = new component;
    
    return this.components[cmp.name] as unknown as C;
  }
}