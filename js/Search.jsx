// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  // Props type declaration
  props: {
    shows: Array<Show>,
  };

  handleSearchTermChange = (
    event: KeyboardEvent & { target: HTMLInputElement },
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  doesShowMatchSearchTerm = (showTitle: string, showDescription: string) =>
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
          {this.props.shows
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
