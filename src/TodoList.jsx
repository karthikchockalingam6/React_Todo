import { Button } from "@mui/material";

const TodoList = ({ handleCheckBox, handleDelete, taskArray }) => {
  return (
    <div>
      {taskArray.map((d) => {
        return (
          <div className="flex" key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.completed}
                onChange={(e) => handleCheckBox(d.id, e.target.checked)}
              />
              {d.title}
            </label>
            <Button
              color="error"
              size="small"
              variant="contained"
              onClick={() => handleDelete(d.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
