import React from "react";
import { useState } from "react";

import "./TaskSideBar.css";
import { taskmana_icon } from "../../assets/index.js";
import ManageCalendar from "../ManageCalendarwindow/ManageCalendar";
import ManageTask from "../ManageTaskwindow/ManageTask";

const TaskSideBar = () => {
  const [calendar, setCalendar] = useState(true);
  const [task, setTask] = useState(false);

  return (
    <div className="Management">
      <div className="TaskSidebar">
        <button
          className="TaskSidebar-button1"
          onClick={() => {
            setCalendar(true);
            setTask(false);
          }}
        >
          <img src={taskmana_icon[0]} alt="Calendar" />
        </button>
        <button
          className="TaskSidebar-button2"
          onClick={() => {
            setCalendar(false);
            setTask(true);
          }}
        >
          <img src={taskmana_icon[1]} alt="Task" />
        </button>
      </div>
      <div className="window">
        {calendar && <ManageCalendar />}
        {task && <ManageTask />}
      </div>
    </div>
  );
};

export default TaskSideBar;
