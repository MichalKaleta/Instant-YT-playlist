import React, { Component, Fragment } from "react";
import { requestVideos } from "api/videosRequest.js";
import { Input } from "reactstrap";
import SearchVideoItem from "./VideoItem/SearchVideoItem.js";
import "./SearchBar.scss";

class SearchBar extends Component {
  state = {
    searchedVideos: []
  };
  timer = 0;
  handleSearch = term => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      requestVideos(term)
        .then(res => {
          this.setState({
            searchedVideos: res.data.items
          });
        })
        .catch(err => {
          console.log(err);
        });
    }, 600);
  };

  render() {
    return (
      <Fragment>
        <Input
          color="primary"
          className="searchbar__search-input"
          type="text"
          placeholder="Search video"
          onChange={e => this.handleSearch(e.target.value)}
        />
        <ul className="searchbar__list">
          {this.state.searchedVideos.map(video => (
            <SearchVideoItem
              key={video.etag}
              videoData={video}
              addToPlaylist={this.props.addToPlaylist}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
export default SearchBar;
