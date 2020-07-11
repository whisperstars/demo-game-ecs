import React, {FC} from 'react';
import {Ground} from "./Ground";
import {Platform} from "./Platform";
import {Player} from "./Player";
import img_player from "../Images/arrow/left_arrow.png";
import img_player_2 from "../Images/arrow/right_arrow.png";

export const Game: FC = () => {
  return (
  <div className='wr'>
    <div className='bg'>
        <Platform />
        <Player />
    </div>
    <div className='el_arrows'>
        <img src={img_player} className='l_arrow'/>
        <img src={img_player_2} className='r_arrow'/>
    </div>
    <Ground />
  </div>
  );
};