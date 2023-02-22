import React, { useState } from "react";
import Task from "../Task/Task";

const Completed = () => {
  const [app, setApp] = useState(true);
  const listData =
    localStorage.getItem("taskList") === ""
      ? []
      : JSON.parse(localStorage.getItem("taskList"));
  const completedList = listData.filter((item) => item.completed === true);
  const [stateList, setStateList] = useState(completedList);
  const deleteTask = (e) => {
    let buttonId = e.target.name;
    const oldList = listData;
    localStorage.setItem(
      "taskList",
      JSON.stringify(oldList.filter((item) => item.id != buttonId))
    );
    setStateList(stateList.filter((item) => item.id != buttonId));
  };
  const taskListElement = stateList.map((task, index) => {
    return (
      <Task
        key={index}
        id={task.id}
        des={task.des}
        completed={task.completed}
        deleteTask={deleteTask}
        delbtn={true}
      />
    );
  });

  function handleDeleteAll() {
    localStorage.setItem(
      "taskList",
      JSON.stringify(listData.filter((item) => item.completed === false))
    );
    setApp(false);
  }

  return (
    <>
      {app && <div className="task-list">{taskListElement}</div>}
      <button className="delete-all" onClick={handleDeleteAll}>
        Delete All
      </button>
    </>
  );
};

export default Completed;
