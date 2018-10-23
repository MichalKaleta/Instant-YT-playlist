import React from "react";
import YouTube from "react-youtube";
import "./Player.scss";

const Player = ({ setNextVideo, currentVideoId }) => (
  <div className="player-wrapper">
    <YouTube
      opts={{
        height: "100%",
        width: "100%",
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          color: "white",
          rel: 0
        }
      }}
      videoId={currentVideoId}
      onEnd={setNextVideo}
      onError={setNextVideo}
    />
  </div>
);
export default Player;
