import React from 'react';
import VideoItem from '_common/videoItem'
import './index.scss';

const Playlist=({playlist})=> {
  console.log(playlist)
    return(
        <ul className='playlist'>{
         playlist && playlist.map(video => (
            <VideoItem 
              videoData={video}
            />
          ))

        }</ul>
    )
  }

export default Playlist;