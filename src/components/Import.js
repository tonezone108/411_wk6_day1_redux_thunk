import React, { Component } from "react";
import { Button } from "@material-ui/core";
class Import extends Component {
  // fill out this component
  state = {
    cars: []
  };

  fetchCars = e => {
    e.preventDefault();
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then(res => res.json())
      .then(results => {
        this.props.uploadCars(results.Results);
      });
  };

  render() {
    return (
      <div>
        <p>Import Component</p>
        <Button onClick={this.fetchCars}>Click Me</Button>
        {this.props.makes.map(make => {
          return <p>{make.MakeName}</p>;
        })}
      </div>
    );
  }
}

export default Import;
