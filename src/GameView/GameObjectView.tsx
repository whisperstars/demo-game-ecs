import React, {FC} from 'react';
import {Render} from '../GameEngine/Components/Render';

interface GameObjectViewProps extends Render {
}

export const GameObjectView: FC<GameObjectViewProps> = (props) => {
  const {x, y, width, height, sprite} = props;
  
  return (
    <div className="gameObjectView" style={{left: x, top: y, height, width, backgroundImage: `url(${sprite})`}}>
    </div>
  );
};