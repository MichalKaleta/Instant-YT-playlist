import React, { Component, Fragment } from "react";
import { requestVideos } from "api/videosRequest.js";
import { Input } from "reactstrap";
import SearchVideoItem from "./VideoItem/SearchVideoItem.js";
import countries from "assets/countries_codes.js";
import next from "assets/next.svg";
import prev from "assets/prev.svg";
import "./SearchBar.scss";
class SearchBar extends Component {
  state = {
    searchedVideos: [],
    term: "",
    nextPage: "",
    prevPage: "",
    country: ""
  };
  timer = 0;

  setCountryCode = code => {
    this.setState({ country: code });
    requestVideos(this.state.term, code).then(res => {
      this.setResponseToState(res);
    });
  };

  setResponseToState = res => {
    this.setState({
      searchedVideos: res.data.items,
      nextPage: res.data.nextPageToken,
      prevPage: res.data.prevPageToken
    });
  };
  handleSearch = term => {
    this.setState({ term });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      requestVideos(term, this.state.country).then(res => {
        this.setResponseToState(res);
      });
    }, 600);
  };

  requestNextPage = () => {
    requestVideos(
      this.state.term,
      this.state.country,
      this.state.nextPage
    ).then(res => {
      this.setResponseToState(res);
    });
  };
  requestPrevPage = () => {
    requestVideos(
      this.state.term,
      this.state.country,
      this.state.prevPage
    ).then(res => {
      this.setResponseToState(res);
    });
  };
  render() {
    return (
      <div className="searchbar">
        <Input
          className="input searchbar__search-input searchbar__search-input_term"
          type="text"
          placeholder="Search video"
          onChange={e => this.handleSearch(e.target.value)}
        />
        <Input
          className="input searchbar__search-input searchbar__search-input_country"
          type="select"
          placeholder="Choose country"
          value={this.state.country}
          onChange={e => this.setCountryCode(e.target.value)}
        >
          <option value={""}>Country</option>
          {countries.map(({ name, code }) => (
            <option value={code}>{name}</option>
          ))}
        </Input>
        {this.state.searchedVideos.length > 0 && (
          <div className="searchbar__list-wrapper">
            <div
              onClick={this.requestPrevPage}
              className="searchbar__nav searchbar__nav_prev"
            >
              <img
                className="searchbar__nav-icon searchbar__nav-icon_prev"
                src={prev}
              />
            </div>
            <ul className="searchbar__list">
              {this.state.searchedVideos.map(video => (
                <SearchVideoItem
                  key={video.etag}
                  videoData={video}
                  addToPlaylist={this.props.addToPlaylist}
                />
              ))}
            </ul>
            <div
              onClick={this.requestNextPage}
              className="searchbar__nav searchbar__nav_next"
            >
              <img
                className="searchbar__nav-icon searchbar__nav-icon_next"
                src={next}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SearchBar;
