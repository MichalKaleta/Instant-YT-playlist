import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Collapse,
  Modal,
  ModalBody,
  Input,
  Button,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem
} from "reactstrap";
import className from "classnames";
import PlaylistItem from "./VideoItem/PlaylistItem.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Playlist.scss";

class Playlist extends Component {
  state = {
    isMenuOpen: false,
    isSaveModalOpen: false,
    isLoadModalOpen: false,
    playlistName: ""
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  toggleSaveModal = () => {
    this.setState({ isSaveModalOpen: !this.state.isSaveModalOpen });
  };
  toggleLoadModal = () => {
    this.setState({ isLoadModalOpen: !this.state.isLoadModalOpen });
  };
  saveCustomPlaylist = () => {
    const playlistToSave = JSON.stringify(this.props.playlist);
    localStorage.setItem(this.state.playlistName, playlistToSave);
  };

  setPlaylistName = playlistName => {
    this.setState({ playlistName });
  };
  render() {
    const togglerClass = className({
      "navbar-toggler": true,
      collapsed: !this.state.isMenuOpen
    });
    const {
      playlist,
      currentIndex,
      play,
      remove,
      handleDragEnd,
      saveDefaultPlaylist,
      loadPlaylist
    } = this.props;
    return (
      <div className="playlist">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable-1" direction="vertical">
            {(provided, snapshot) => (
              <div>
                <Navbar className="playlist__menu menu" dark>
                  <NavbarBrand className="menu__header">Playlist</NavbarBrand>
                  <button
                    className={togglerClass}
                    type="button"
                    onClick={this.toggleMenu}
                  >
                    <span class="icon-bar top-bar" />
                    <span class="icon-bar middle-bar" />
                    <span class="icon-bar bottom-bar" />
                  </button>
                  <Collapse navbar isOpen={this.state.isMenuOpen}>
                    <Nav navbar>
                      <NavItem>
                        <NavLink href="#" onClick={saveDefaultPlaylist}>
                          Save
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#" onClick={this.toggleSaveModal}>
                          Save as...
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#" onClick={this.toggleLoadModal}>
                          Open
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>

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
        <Modal
          toggle={this.toggleSaveModal}
          isOpen={this.state.isSaveModalOpen}
        >
          <ModalBody>
            New Playlist:
            <Input
              name="playlist"
              className="input modal__input"
              type="text"
              onBlur={e => {
                this.setPlaylistName(e.target.value);
              }}
            />
            <Button type="button" onClick={this.saveCustomPlaylist}>
              SAVE
            </Button>
          </ModalBody>
        </Modal>
        <Modal
          toggle={this.toggleLoadModal}
          isOpen={this.state.isLoadModalOpen}
        >
          <ModalBody>
            <ListGroupItemHeading>Load Playlist</ListGroupItemHeading>
            <ListGroup flush>
              {Object.keys(localStorage).map(playlistName => (
                <ListGroupItem
                  tag="a"
                  href="#"
                  color={"dark"}
                  onClick={() => loadPlaylist(playlistName)}
                >
                  {playlistName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Playlist;
