import React from "react";
import { logout } from "../../../../mock/controller/auth";

function Setting() {
  return (
    <div>
      <div>Setting</div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Setting;
