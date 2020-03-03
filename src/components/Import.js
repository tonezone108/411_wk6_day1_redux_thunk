import React, { Component } from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container
} from "@material-ui/core";
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
      <Container>
        <h2 style={{ color: "blue" }}>COUNT: {this.props.makes.length}</h2>
        <Button onClick={this.fetchCars} variant="contained" color="primary">
          Import
        </Button>
        {/* {this.props.makes.map(make => {
          return <p>{make.MakeName}</p>;
        })} */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Make/Model</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {" "}
            {this.props.makes.map((make, index) => {
              return (
                <TableRow key={make.MakeId}>
                  <TableCell align="right">{make.MakeId}</TableCell>
                  <TableCell align="right">{make.MakeName}</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              );
            })}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </Container>
    );
  }
}

export default Import;
