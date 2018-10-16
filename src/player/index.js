import React from 'react'
import YouTube from 'react-youtube';
//import './index.scss'

const Player = () => {

  const opts = {
    height: '450',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

return (
  <YouTube
    opts={opts}
    videoId="2g811Eo7K8U"
  />
  )
}
export default Player;