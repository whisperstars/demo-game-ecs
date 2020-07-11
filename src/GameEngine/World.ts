import {Engine} from './lib/Engine';
import {Entity} from './lib/Entity';
import {Position} from './Components/Position';
import {Size} from './Components/Size';
import Timeout = NodeJS.Timeout;
import {
  AnimationSystem,
  PositionSystem,
} from './Systems';
import {Sprite} from './Components/Sprite';
import {Solid} from './Components/Solid';
import {GameEvents} from './Events';

export class World {
  engine: Engine;
  interval: Timeout | null;
  
  constructor() {
    this.engine = new Engine;
    this.interval = null;
  }
  
  setup() {
    const groundEntity = new Entity('ground', [
      new Position(),
      new Size(),
      new Sprite(0, ['string']),
      new Solid(),
    ]);
  
    const platformEntity = new Entity('platform', [
      new Position(),
      new Size(),
      new Sprite(0, ['string']),
      new Solid(),
    ]);
  
    const playerEntity = new Entity('player', [
      new Position(),
      new Size(),
      new Sprite(0, ['string']),
      new Solid(),
    ]);
    
    this.engine.addEntity(groundEntity);
    this.engine.addEntity(platformEntity);
    this.engine.addEntity(playerEntity);
    
    this.engine.addSystem(new PositionSystem);
    this.engine.addSystem(new AnimationSystem);
  }
  
  start(onUpdate: (entities: Array<Entity>) => void) {
    if (this.interval) {
      return;
    }
    
    this.interval = setInterval(() => {
      this.engine.update();
      onUpdate(this.engine.getEntitiesForRender());
    }, 500);
  }
  
  stop() {
    this.interval && clearInterval(this.interval);
  }
  
  fireEvent(event: GameEvents, data: unknown) {
    this.engine.fireEvent(event, data);
  }
}