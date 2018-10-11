import React from "react";
import "./SearchVideoItem.scss";

const SearchVideoItem = ({
  addToPlaylist,
  videoData: {
    id,
    snippet: { title, thumbnails, channelTitle }
  }
}) => (
  <li
    onClick={() =>
      addToPlaylist({
        thumb: thumbnails.default.url,
        title,
        channelTitle,
        id: id.videoId
      })
    }
    className="video-item"
  >
    <img
      alt=""
      className="video-item__thumbnail"
      src={thumbnails.default.url}
    />
    <div className="video-item__description">
      <p className="video-item__description-title">{title}</p>
      <p className="video-item__description-channel">{channelTitle}</p>
    </div>
  </li>
);
export default SearchVideoItem;
