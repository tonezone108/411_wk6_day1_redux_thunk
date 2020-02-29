// fill out this container
import { connect } from "react-redux";
import Import from "../components/Import";
import { uploadCars } from "../redux/actions";

const mapStateToProps = state => {
  return {
    cars: state.cars,
    makes: state.makes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadCars: cars => dispatch(uploadCars(cars))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
