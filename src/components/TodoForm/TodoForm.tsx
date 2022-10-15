import React, { useState, FC, ChangeEvent, FormEvent } from "react";

import { nanoid } from "nanoid";

import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

import cl from "./TodoForm.module.css";

import { INewTask } from "./TodoFormTypes";

export const TodoForm: FC<INewTask> = ({ addNewTask }) => {
  const [value, setValue] = useState("");

  const clickHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: nanoid(),
      date: new Date().toLocaleString(),
      status: false,
      value,
    };

    addNewTask(newTask);

    setValue("");
  };

  return (
    <form className={cl.form} onSubmit={clickHandler}>
      <Input
        autoFocus={true}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Enter a task . . ."
      />
      <Button disabled={!value.length}>Add a task</Button>
    </form>
  );
};
