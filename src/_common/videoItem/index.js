import React from 'react'
import './index.scss'

const VideoItem = ({
  addToPlaylist,
  videoData,
}) => (
  <li
    onClick={() => addToPlaylist(videoData)}
    className='video-item'
  >
    <img
      className='video-item__thumbnail'
      src={videoData.thumbnails.default.url} />
    <div
      className='video-item__description'
    >
      <p className='video-item__description-title'> 
        {videoData.title}
      </p>
      <p className='video-item__description-channel'> 
        {videoData.channelTitle}
      </p>
    </div>
  </li>
  )
export default VideoItem;