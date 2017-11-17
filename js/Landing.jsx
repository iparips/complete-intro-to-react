// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from "./actionCreators";

const Landing = (props: {
    searchTerm: string,
    handleSearchTermChange: Function}) => (
  <div className="landing">
    <h1>{props.searchTerm}</h1>
    <input type="text" onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

// connect injects mapDispatchToProps function into the component

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
