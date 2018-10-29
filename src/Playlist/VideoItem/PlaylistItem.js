import React from "react";
import className from "classnames";
import { Draggable } from "react-beautiful-dnd";
import removeIcon from "assets/delete.svg";
import "./PlaylistItem.scss";

const PlaylistItem = ({
  play,
  remove,
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
          onClick={() => play(index)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img alt="" className="playlist-item__thumbnail" src={thumb} />
          <div className="playlist-item__description">
            <p className="playlist-item__description-title">{title}</p>
            <p className="playlist-item__description-channel">{channelTitle}</p>
          </div>
          <div
            className="playlist-item__remove"
            onClick={e => {
              e.stopPropagation();
              remove(index);
            }}
          >
            <img className="playlist-item__icon" src={removeIcon} />
          </div>
        </li>
      )}
    </Draggable>
  );
};
export default PlaylistItem;
