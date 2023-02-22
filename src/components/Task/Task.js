import React, { useState } from "react";
import "./Task.css";

const Task = (props) => {
  const { id, des, completed, deleteTask, delbtn } = props;
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleChange = (e) => {
    const listData = JSON.parse(localStorage.getItem("taskList"));
    setIsCompleted(!isCompleted);
    listData[e.target.name].completed = !listData[e.target.name].completed;
    localStorage.setItem("taskList", JSON.stringify(listData));
  };
  return (
    <div className="task">
      <div className={`task-item id-${id}`}>
        <div className="task-text">
          <input
            type="checkbox"
            checked={isCompleted ? `checked` : ``}
            onChange={handleChange}
            name={id}
          />
          <label className="task-des">{des}</label>
        </div>
      </div>
      {delbtn && (
        <button className="delete-task-btn" name={id} onClick={deleteTask}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Task;
