import React, {FC} from 'react';
import img_player from "../Images/player/stop/player_13.gif";
import img_player_2 from "../Images/player/stop/player_14.gif";

export const Player: FC = () => {
  return (
      <div className='el_player'>
          <img src={img_player}/>
          <img src={img_player_2}/>
      </div>
  );
};