import { Button, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === "") return;
    addTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form
        className="text-center flex flex-col items-center space-y-3 m-5"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Tasks"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></TextField>
        <Button variant="contained" size="large" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
