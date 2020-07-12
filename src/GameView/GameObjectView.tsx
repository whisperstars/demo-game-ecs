import React, {FC} from 'react';

interface GameObjectViewProps {
  x: number;
  y: number;
  width: number;
  height: number;
  sprite: string;
}

export const GameObjectView: FC<GameObjectViewProps> = (props) => {
  const {x, y, width, height, sprite} = props;
  
  return (
    <div className="gameObjectView" style={{left: x, top: y, height, width, backgroundImage: `url(${sprite})`}}>
    </div>
  );
};