import React, { Fragment } from "react";
import PlaylistItem from "./VideoItem/PlaylistItem.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Playlist.scss";

const Playlist = ({ playlist, currentIndex, play, remove, handleDragEnd }) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-1" direction="vertical">
        {(provided, snapshot) => (
          <div>
            <header className="playlist__header">Playlist</header>
            <ul
              ref={provided.innerRef}
              className="playlist__list"
              {...provided.droppableProps}
            >
              {playlist &&
                playlist.map((video, index) => (
                  <PlaylistItem
                    key={video.id + index}
                    play={play}
                    remove={remove}
                    video={video}
                    index={index}
                    active={currentIndex === index}
                  />
                ))}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Playlist;
