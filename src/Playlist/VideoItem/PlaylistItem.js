import React from "react";
import className from "classnames";
import "./PlaylistItem.scss";

const PlaylistItem = ({
  playVideo,
  index,
  active,
  videoData: { title, channelTitle, thumb }
}) => {
  const itemClass = className({
    "playlist-item": true,
    "playlist-item_active": active
  });

  return (
    <li className={itemClass} onClick={() => playVideo(index)}>
      <img alt="" className="playlist-item__thumbnail" src={thumb} />
    </li>
  );
};
export default PlaylistItem;
