import { React, useState } from "react";
import FacilityVehicle from "../../../../components/FacilityVehicle/FacilityVehicle";
import FacilityMCP from "../../../../components/FacilityMCP/FacilityMCP";

function Facility() {
  const [changeState, setChange] = useState(true);
  const handleChange = () => {
    setChange(!changeState);
  };

  return changeState ? (
    <FacilityMCP handleChange={handleChange} />
  ) : (
    <FacilityVehicle handleChange={handleChange} />
  );
}

export default Facility;
