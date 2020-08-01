import React, {
  FC,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import img_player from "../assets/img/game/arrow/left_arrow.png";
import img_player_2 from "../assets/img/game/arrow/right_arrow.png";
import {World} from '../GameEngine/World';
import {GameObjectView} from './GameObjectView';
import {GameEvents} from '../GameEngine/Events/movementEvents';
import {Render} from '../GameEngine/Components/Render';

export const Game: FC = () => {
  const [gameObjects, setGameObjects] = useState<Array<Render>>([]);
  const worldRef = useRef<World>();
  
  useEffect(() => {
    if (!worldRef.current) {
      worldRef.current = new World();
    }
  });
  
  useEffect(() => {
    const world = worldRef.current;
    if (world) {
      world.setup();
      world.start((entities) => setGameObjects(entities));
    }
  }, [setGameObjects]);
  
  const onMouseDown = (side: number) => {
    const world = worldRef.current;
    if (world) {
      world.fireEvent(GameEvents.moveStart, side);
    }
  };
  
  const onMouseUp = () => {
    const world = worldRef.current;
    if (world) {
      world.fireEvent(GameEvents.moveStop, 0);
    }
  };
  
  const startMove = (e: KeyboardEvent) => {
    const world = worldRef.current;
    if (world) {
      if (e.keyCode === 37) {
        world.fireEvent(GameEvents.moveStart, -1);
      } else if (e.keyCode === 39) {
        world.fireEvent(GameEvents.moveStart, 1);
      }
    }
  };
  
  const endMove = (e: KeyboardEvent) => {
    const world = worldRef.current;
    if (world) {
      if (e.keyCode === 37) {
        world.fireEvent(GameEvents.moveStop, 0);
      } else if (e.keyCode === 39) {
        world.fireEvent(GameEvents.moveStop, 0);
      }
    }
  };
  
  return (
    <div className='wr' onKeyDown={startMove} onKeyUp={endMove} tabIndex={0}>
      <div className='bg'>
        <div className="tree1" style={{left: 470, top: 410, transform: 'rotate(8deg)', width: 300, opacity: 0.8}}/>
        <div className="tree1" style={{left: 1270, top: 380, transform: 'rotate(8deg)', width: 300, opacity: 0.8}}/>
        <div className="tree1" style={{left: 1265, top: 440, transform: 'rotate(-12deg)', width: 270, opacity: 0.8}}/>
        {
          gameObjects.map((gameObject) => (
            <GameObjectView
              key={gameObject.id}
              {...gameObject}
            />
          ))
        }
        <div className="tree1" />
        <div className="tree2" />
      </div>
      <div className='el_arrows'>
        <img src={img_player} className='l_arrow' onMouseDown={() => onMouseDown(-1)} onMouseUp={onMouseUp} alt='left'/>
        <img src={img_player_2} className='r_arrow' onMouseDown={() => onMouseDown(1)} onMouseUp={onMouseUp} alt='right'/>
      </div>
    </div>
  );
};