import React from "react";
import className from "classnames";
import { Draggable } from "react-beautiful-dnd";
import "./PlaylistItem.scss";

const PlaylistItem = ({
  playVideo,
  index,
  active,
  video: { title, channelTitle, thumb, id }
}) => {
  const itemClass = className({
    "playlist-item": true,
    "playlist-item_active": active
  });

  return (
    <Draggable draggableId={id + index} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          className={itemClass}
          onClick={() => playVideo(index)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img alt="" className="playlist-item__thumbnail" src={thumb} />
          <div className="playlist-item__description">
            <p className="playlist-item__description-title">{title}</p>
            <p className="playlist-item__description-channel">{channelTitle}</p>
          </div>
        </li>
      )}
    </Draggable>
  );
};
export default PlaylistItem;
