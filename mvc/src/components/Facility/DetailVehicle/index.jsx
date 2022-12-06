import React from "react";
// import ProgressBar from "../../ProgressBar/index";

import "./DetailVehicle.css";

function DetailFacility(props) {
  return (
      <div className='DetailInfor'>
          <h2 id='VehicleName'>{props.name}</h2>
          <p id='VehicleId'>{props.id}</p>
          <h3 id='Capacity'>Capacity: </h3>
          <p id='VehiclesCapacity'>{props.capacity}g</p>
          <h3 id='Fuel'>Fuel:</h3>
          <p id='VehicleFuel'>{props.curFuel}/{props.totalFuel}</p>
          <h3 id='Route'>Current Route:</h3>
          <p id='VehicleRoute'>{props.route.map(item => (`${item}, `))}</p>
          <h3 id='Status-Vehicle'>Status:</h3>
          <div className="VehicleStatus">
              {props.status}
          </div>
          <div className='Map'></div>
      </div>
  );
}

export default DetailFacility;
