const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = car => {
  return {
    type: "ADD_CAR",
    value: car
  };
};

export const removeCar = index => {
  return {
    type: "REMOVE_CAR",
    value: index
  };
};

export const uploadCars = cars => {
  return {
    type: "UPLOAD_CARS",
    value: cars
  };
};
