import React, { FC, ChangeEvent } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";

import { ITodoList } from "./TodoListTypes";

import cl from "./TodoList.module.css";

export const TodoList: FC<ITodoList> = ({
  tasks,
  remove,
  edited,
  isEdit,
  value,
  setValue,
  save,
  completed,
  todoFilter,
}) => {
  return (
    <div className={cl.taskList}>
      {tasks.map((item) => (
        <div className={cl.flex} key={item.id}>
          {isEdit === item.id ? (
            <form className={cl.newTask} onSubmit={() => save(item.id)}>
              <Input
                style={{ maxWidth: "500px", width: "100%", height: "40px" }}
                autoFocus
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
              <Button style={{ marginLeft: "20px", height: "100%" }}>
                Save
              </Button>
            </form>
          ) : (
            <div>
              <div className={cl.inputCheckboxFlex}>
                <input
                  style={{ width: "19px", height: "19px", marginRight: "15px" }}
                  type="checkbox"
                  checked={item.status}
                />
                <div
                  style={{ cursor: "pointer", marginBottom: "5px" }}
                  className={item.status ? cl.completed : ""}
                  onClick={() => completed(item.id)}
                >
                  {item.value}
                </div>
              </div>
              <div className={cl.date}>{item.date}</div>
            </div>
          )}

          {isEdit === item.id ? null : (
            <div className={cl.flexIcon}>
              <DeleteIcon onClick={() => remove(item)} className={cl.icon} />
              <EditIcon
                onClick={() => edited(item.id, item.value)}
                className={cl.icon}
              />
            </div>
          )}
        </div>
      ))}

      <div className={cl.filter}>
        <div onClick={() => todoFilter("All")} className={cl.items}>
          All
        </div>
        <div onClick={() => todoFilter(false)} className={cl.items}>
          Active
        </div>
        <div onClick={() => todoFilter(true)} className={cl.items}>
          Completed
        </div>
      </div>
    </div>
  );
};
