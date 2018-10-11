import React from "react";
import PlaylistItem from "./VideoItem/PlaylistItem.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Playlist.scss";

const Playlist = ({ playlist, currentIndex, playVideo, handleDragEnd }) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <header className="playlist__header">Playlist</header>
      <Droppable droppableId="droppable-1" direction="vertical">
        {(provided, snapshot) => (
          <ul
            ref={provided.innerRef}
            className="playlist__list"
            {...provided.droppableProps}
          >
            {playlist &&
              playlist.map((video, index) => (
                <PlaylistItem
                  key={video.id + index}
                  playVideo={playVideo}
                  video={video}
                  index={index}
                  active={currentIndex === index}
                />
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Playlist;
