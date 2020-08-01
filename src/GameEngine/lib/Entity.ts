import {
  ComponentInterface,
  EntityId,
  idGenerator,
} from './types';
import {Constructor} from '../../ts/utils';

export class Entity {
  id: EntityId;
  components: Record<string, ComponentInterface>;
  
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
      [component.constructor.name]: component,
    };
  }
  
  removeComponent(component: Constructor<ComponentInterface>) {
    // @ts-ignore
    if (!this.components[component.name]) {
      return;
    }
    
    delete this.components[component.name];
  
    this.components = {...this.components};
  }
  
  hasComponents(Components: Array<Constructor<ComponentInterface>>) {
    return !Components.some((Component) => {
      return !this.components[Component.name];
    });
  }
  
  getComponent<C extends ComponentInterface>(Component: Constructor<C>): C {
    return this.components[Component.name] as unknown as C;
  }
}