import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  doesShowMatchSearchTerm = (showTitle, showDescription) =>
    `${showTitle} ${showDescription}`
      .toUpperCase()
      .indexOf(this.state.searchTerm.toUpperCase()) >= 0;

  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
              this.doesShowMatchSearchTerm(show.title, show.description),
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
