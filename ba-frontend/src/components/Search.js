import React, { Component } from 'react';
import '../App.css';

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
      <form onSubmit={ this.handleSubmit }>
        <input autoFocus type="text" placeholder="Origin" onChange={ this.handleOriginInput } />
        <br/>
        <input type="text" placeholder="Destination" onChange={ this.handleDestinationInput } />
        <br/>
        <input type="submit" value="Search!" />
      </form>
    );
  }
}

export default Search;