import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import img_player from "../Images/arrow/left_arrow.png";
import img_player_2 from "../Images/arrow/right_arrow.png";
import {World} from '../GameEngine/World';
import {GameObjectView} from './GameObjectView';
import {GameEvents} from '../GameEngine/Events/movementEvents';

export const Game: FC = () => {
  const [gameObjects, setGameObjects] = useState<Array<{width: number, height: number, x: number, y: number, sprite: string, id: string}>>([]);
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
      world.fireEvent(GameEvents.mouseDown, side);
    }
  };
  
  const onMouseUp = () => {
    const world = worldRef.current;
    if (world) {
      world.fireEvent(GameEvents.mouseUp, 0);
    }
  };
  
  return (
    <div className='wr'>
      <div className='bg'>
        {
          gameObjects.map(({id, ...other}) => (
            <GameObjectView
              key={id}
              {...other}
            />
          ))
        }
        {/*<Platform />
        <Player />
        <Ground />*/}
      </div>
      <div className='el_arrows'>
        <img src={img_player} className='l_arrow' onMouseDown={() => onMouseDown(-1)} onMouseUp={onMouseUp}/>
        <img src={img_player_2} className='r_arrow' onMouseDown={() => onMouseDown(1)} onMouseUp={onMouseUp}/>
      </div>
    </div>
  );
};