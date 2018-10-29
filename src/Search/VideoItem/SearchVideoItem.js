import React from "react";
import TextTruncate from "react-text-truncate";
import plusIcon from "assets/plus.svg";
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
    className="search-item"
  >
    <img
      alt=""
      className="search-item__thumbnail"
      src={thumbnails.default.url}
    />
    <div className="search-item__add-overlay">
      <img className="search-item__add-icon" src={plusIcon} />
    </div>
    <div className="search-item__description">
      <p className="search-item__description-title">
        <TextTruncate line={3} truncateText="…" text={title} />
      </p>
      <p className="search-item__description-channel">{channelTitle}</p>
    </div>
  </li>
);
export default SearchVideoItem;
