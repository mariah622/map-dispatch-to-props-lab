import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    // add missing code
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" 
            value={this.state.name}/>
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" 
            value={this.state.location}/>
        </p>
        <input type="submit" />
      </form>
    );
  }
};


//connect this component by wrapping RestaurantInput below

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newResturant) => {
      dispatch(addRestaurant(newResturant))
    }
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput);
// export default RestaurantInput
