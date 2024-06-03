import { Divider } from "@mui/material";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [taskArray, setTaskArray] = useState([]);

  const addTask = (title) => {
    setTaskArray((vals) => {
      return [...vals, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const handleCheckBox = (id, completed) => {
    setTaskArray((currentTodo) =>
      currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...taskArray, completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTaskArray((currentVal) => {
      return currentVal.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className="text-blue-600 text-2xl text-center">To-Do List</div>
      <TodoForm addTask={addTask} />
      <Divider />
      <div className="flex flex-col items-center space-y-2 mt-5">
        <TodoList
          handleDelete={handleDelete}
          handleCheckBox={handleCheckBox}
          taskArray={taskArray}
        />
      </div>
    </>
  );
};

export default App;
