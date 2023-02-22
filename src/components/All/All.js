import React, { useState } from "react";
import Task from "../Task/Task";

const All = () => {
  const listData =
    localStorage.getItem("taskList") === ""
      ? []
      : JSON.parse(localStorage.getItem("taskList"));
  const [textInput, setTextInput] = useState("");
  const [stateList, setStateList] = useState(listData);
  const taskListElement = stateList.map((task, index) => {
    return (
      <Task
        key={index}
        id={task.id}
        des={task.des}
        completed={task.completed}
        delbtn={false}
      />
    );
  });
  function addNewTask(event) {
    const newTask = {
      id: stateList.length,
      des: textInput,
      completed: false,
    };
    const oldList = stateList;
    event.preventDefault();
    setTextInput("");
    setStateList([...stateList, newTask]);
    localStorage.setItem("taskList", JSON.stringify([...oldList, newTask]));
  }

  function handleChangeInput(event) {
    setTextInput(event.target.value);
  }

  return (
    <>
      <div className="add-task">
        <input
          className="input-task-des"
          type="text"
          value={textInput}
          placeholder="Add Details"
          onChange={handleChangeInput}
        />
        <button className="add-new-task" onClick={addNewTask}>
          Add
        </button>
      </div>
      <div className="task-list">{taskListElement}</div>
    </>
  );
};

export default All;
