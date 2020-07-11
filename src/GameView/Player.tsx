import React, {FC} from 'react';
import img_player from "../Images/player/idle/player_13.png";
import img_player_2 from "../Images/player/idle/player_14.png";

export const Player: FC = () => {
  return (
      <div className='el_player'>
          <img src={img_player}/>
          <img src={img_player_2}/>
      </div>
  );
};