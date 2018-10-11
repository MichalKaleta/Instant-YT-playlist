import React from "react";
import PlaylistItem from "./VideoItem/PlaylistItem.js";
import "./Playlist.scss";

const Playlist = ({ playlist, currentIndex, playVideo }) => {
  return (
    <ul className="playlist">
      {playlist &&
        playlist.map((video, index) => (
          <PlaylistItem
            key={video.id + index}
            active={currentIndex === index}
            index={index}
            videoData={video}
            playVideo={playVideo}
          />
        ))}
    </ul>
  );
};

export default Playlist;
