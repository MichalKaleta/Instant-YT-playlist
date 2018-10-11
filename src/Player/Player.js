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
          autoplay: 1
        }
      }}
      videoId={currentVideoId}
      onEnd={setNextVideo}
    />
    <p className="df">ddd</p>
  </div>
);
export default Player;
