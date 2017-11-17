// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import { setSearchTerm } from "./actionCreators";

class Landing extends Component {

  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search')
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input type="text"
                 onChange={this.props.handleSearchTermChange}
                 value={this.props.searchTerm}
                 placeholder="Search" />
          <Link onClick={() => { this.props.handleSearchTermChange({target: { value: ''}}) }} to="/search">or Browse All</Link>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

// connect injects mapDispatchToProps function into the component

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
