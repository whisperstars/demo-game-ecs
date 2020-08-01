import {Engine} from '../ECS_lib/Engine';
import {Entity} from '../ECS_lib/Entity';
import {Position} from './Components/Position';
import {Size} from './Components/Size';
import {Sprite} from './Components/Sprite';
import {Solid} from './Components/Solid';
import {GameEvents} from './Events/movementEvents';
import {PositionSystem} from './Systems/PositionSystem';
import {AnimationSystem} from './Systems/AnimationSystem';
import {RenderSystem} from './Systems/RenderSystem';
import {MouseEventsSystem} from './Systems/MouseEventsSystem';
import {Player} from './Components/Player';

import groundSprite from '../assets/img/game/ground.jpg';
import platformSprite from '../assets/img/game/platform.jpg';
import idleRight from '../assets/img/game/player/idle/player_13.png';
import idleLeft from '../assets/img/game/player/idle/player_14.png';
import {moveLeftSprite} from '../GameView/Sprites/Player/moveLeftSprite';
import {moveRightSprite} from '../GameView/Sprites/Player/moveRightSprite';
import {PlayerSide} from './Components/PlayerSide';

export class World {
  engine: Engine;
  interval: number | null;
  
  constructor() {
    this.engine = new Engine();
    this.interval = null;
  }
  
  setup() {
    const groundEntity = new Entity('ground', [
      new Position(0, 639),
      new Size(document.body.offsetWidth, 80),
      new Sprite(0, 'idle',[groundSprite]),
      new Solid(),
    ]);
  
    const platformEntity = new Entity('platform', [
      new Position(220, 390),
      new Size(600, 100),
      new Sprite(0, 'idle',[platformSprite]),
      new Solid(),
    ]);
  
    const playerEntity = new Entity('player', [
      new Position(320, 390 - 113),
      new Size(80, 125),
      new Sprite(0, 'idle', {
        idle: [idleLeft],
        idleLeft: [idleLeft],
        idleRight: [idleRight],
        moveLeft: moveLeftSprite,
        moveRight: moveRightSprite,
      }),
      new Solid(),
      new Player(),
      new PlayerSide(1),
    ]);
    
    this.engine.addEntity(groundEntity);
    this.engine.addEntity(platformEntity);
    this.engine.addEntity(playerEntity);
    
    this.engine.addSystem(new PositionSystem());
    this.engine.addSystem(new AnimationSystem());
    this.engine.addSystem(new RenderSystem());
    this.engine.addSystem(new MouseEventsSystem());
  }
  
  start(onUpdate: (entities: Array<{width: number, height: number, x: number, y: number, sprite: string, id: string}>) => void) {
    if (this.interval) {
      return;
    }
    
    // @ts-ignore
    this.interval = setInterval(() => {
      this.engine.update();
      onUpdate(this.engine.getEntitiesForRender());
    }, 100);
  }
  
  stop() {
    this.interval && clearInterval(this.interval);
  }
  
  fireEvent(event: GameEvents, data: unknown) {
    this.engine.fireEvent(event, data);
  }
}