import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Search extends Component {

  state = {
    origin: '',
    destination: ''
  };

  handleOriginInput = (event) => {
    this.setState({
      origin: event.target.value.toLowerCase()
    });
  }

  handleDestinationInput = (event) => {
    this.setState({
      destination: event.target.value.toLowerCase()
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(
      `/search/${this.state.origin}/${this.state.destination}`
    );
  }

  render() {
    return (
      <>
        <input autoFocus type="text" placeholder="Origin" onChange={ this.handleOriginInput } />
        <input autoFocus type="text" placeholder="Destination" onChange={ this.handleDestinationInput } />
        <button onClick={ this.handleSubmit }>Search!</button>
      </>
    );
  }
}

export default Search;