import React from "react";
import TaskSideBar from "../../../../components/TaskSideBar/TaskSideBar";
import TaskCalendar from "../../../../components/Calendar/Calendar";

import "./ManageTask.css";

function ManageTask() {
  return (
    <div className="ManaTaskContainer">
      <TaskCalendar />
    </div>
  );
}

export default ManageTask;
