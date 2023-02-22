import React, { useState } from "react";
import Task from "../Task/Task";

const Active = () => {
  const listData =
    localStorage.getItem("taskList") === ""
      ? []
      : JSON.parse(localStorage.getItem("taskList"));
  const completedList = listData.filter((item) => item.completed === false);
  const [stateList, setStateList] = useState(completedList);
  const [textInput, setTextInput] = useState("");
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
        delbtn={false}
      />
    );
  });

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

export default Active;
