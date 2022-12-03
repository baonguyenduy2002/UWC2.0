import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        MCPs Management
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">MCPs Management</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Vehicles Management</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;