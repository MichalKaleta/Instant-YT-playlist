import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "Search/SearchBar.js";
import Playlist from "Playlist/Playlist.js";
import Player from "Player/Player.js";
import "./App.scss";

class App extends Component {
  state = {
    playlist: [],
    currentVideo: {
      id: "",
      index: null
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.playlist !== this.state.playlist &&
      this.state.playlist.length === 1
    ) {
      this.setState({
        ...this.state,
        currentVideo: {
          id: this.state.playlist[0].id,
          index: 0
        }
      });
    }
  }
  addToPlaylist = videoItem => {
    this.setState(prevState => ({
      playlist: [...prevState.playlist, videoItem]
    }));
  };

  setVideo = requestedVideoIndex => {
    const { playlist } = this.state;
    const id = playlist[requestedVideoIndex]
      ? playlist[requestedVideoIndex].id
      : "stop";
    this.setState({
      currentVideo: {
        index: requestedVideoIndex,
        id
      }
    });
  };

  setNextVideo = () => {
    const nextIndex = this.state.currentVideo.index + 1;
    if (this.state.playlist[nextIndex]) {
      this.setVideo(nextIndex);
    } else if (this.state.playlist[0]) {
      this.setVideo(0);
    } else {
      this.setVideo();
    }
  };
  removeFromPlaylist = index => {
    const newPlaylist = [...this.state.playlist];
    newPlaylist.splice(index, 1);
    const currentVideo = { ...this.state.currentVideo };
    if (index <= currentVideo.index && index > 0) {
      currentVideo.id = newPlaylist[index - 1].id;
      currentVideo.index--;
    }

    this.setState({
      playlist: newPlaylist,
      currentVideo
    });
  };

  handleDragEnd = result => {
    if (!result.destination) return;
    const start = result.source.index;
    const end = result.destination.index;
    const newPlaylist = [...this.state.playlist];
    const dragged = newPlaylist.splice(start, 1);
    newPlaylist.splice(end, 0, ...dragged);

    let index = this.state.currentVideo.index;

    if (
      (start < index && index < end + 1) ||
      (start > index && index > end - 1)
    ) {
      index += end > start ? -1 : 1;
    } else if (index === start) {
      index = end;
    }
    this.setState({
      playlist: newPlaylist,
      currentVideo: {
        id: this.state.currentVideo.id,
        index
      }
    });
  };

  render() {
    return (
      <Container fluid className="app">
        <Row>
          <Col sm={8}>
            <Player
              currentVideoId={this.state.currentVideo.id}
              setNextVideo={this.setNextVideo}
            />
            <SearchBar addToPlaylist={this.addToPlaylist} />
          </Col>
          <Col sm={4} className="playlist-container">
            <Playlist
              playlist={this.state.playlist}
              currentIndex={this.state.currentVideo.index}
              play={this.setVideo}
              remove={this.removeFromPlaylist}
              handleDragEnd={this.handleDragEnd}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
