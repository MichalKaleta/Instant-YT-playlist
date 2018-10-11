import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import SearchBar from 'searchBar/index.js';
import Playlist from 'playlist/index.js'
import Player from 'player/index.js'
import './App.scss';

class App extends Component {
  state={
    playlist:[]
  }

  addToPlaylist=(videoItem)=>{
    this.setState(prevState=>({
        playlist: [...prevState.playlist, videoItem]
    }))
  }
  

  render() {
    return (
      <Container fluid className="app">
        <header className="app-header">
          aaaaaa
        </header>
        <Row>
          <Col sm={8}>
            <div>
              <Player />
            </div>
            <div>
              <Playlist 
                playlist={this.state.playlist}
              />
            </div>
          </Col>
          <Col sm={4}>
            <SearchBar 
              addToPlaylist={this.addToPlaylist}
            />
          </Col>
        </Row> 
      </Container>
    );
  }
}

export default App;
