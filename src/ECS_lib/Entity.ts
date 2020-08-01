import {
  ComponentInterface,
  EntityId,
} from './types';
import {Constructor} from '../ts/types';

export class Entity {
  id: EntityId;
  components: Record<string, ComponentInterface>;
  
  constructor(id: EntityId, components: Array<ComponentInterface> = []) {
    this.id = id;
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
  
  removeComponent(Component: Constructor<ComponentInterface>) {
    if (!this.components[Component.name]) {
      return;
    }
    
    delete this.components[Component.name];
  
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