import React, { FC, useEffect, useMemo } from "react";
import { useState } from "react";

import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";
import { Empty } from "../../components/UI/Empty/Empty";
import { Search } from "../../components/UI/Search/Search";
import { Select } from "../../components/UI/Select/Select";

import { ITasks } from "./TaskTypes.";

export const Tasks: FC = () => {
  const [todoList, setTodoList] = useState<ITasks[]>([]);
  const [filtered, setFiltered] = useState(todoList);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<boolean | string>(false);
  const [edit, setEdit] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storage =
      JSON.parse(window.localStorage.getItem("todo") as string) || [];
    setTodoList(storage);
  }, []);

  useEffect(() => {
    setFiltered(todoList);
  }, [todoList]);

  const addTask = (newTask: ITasks) => {
    const addItem = [...todoList, newTask];
    setTodoList(addItem);
    window.localStorage.setItem("todo", JSON.stringify(addItem));
  };

  const removeTask = (todo: ITasks) => {
    const removeItem = todoList.filter((item) => item.id !== todo.id);
    setTodoList(removeItem);
    window.localStorage.setItem("todo", JSON.stringify(removeItem));
  };

  const sortedTasks = useMemo(() => {
    if (sort) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return [...filtered].sort((a: any, b: any) =>
        a[sort].localeCompare(b[sort])
      );
    } else {
      return filtered;
    }
  }, [filtered, sort]);

  const sortedAndSearchTasks = useMemo(() => {
    return sortedTasks.filter((item) =>
      item.value.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedTasks]);

  const editTasks = (id: string, value: string) => {
    setStatus(id);
    setEdit(value);
  };

  const saveTasks = (id: string) => {
    const changedTask = [...todoList].filter((item) => {
      if (item.id === id) {
        item.value = edit;
        item.date = new Date().toLocaleString();
      }
      return item;
    });

    setTodoList(changedTask);
    setStatus(false);
    window.localStorage.setItem("todo", JSON.stringify(changedTask));
  };

  const completedTask = (id: string) => {
    const completedTask = [...todoList].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodoList(completedTask);
    window.localStorage.setItem("todo", JSON.stringify(completedTask));
  };

  const filteredTasks = (status: boolean | string) => {
    if (status === "All") {
      setFiltered(todoList);
    } else {
      const filteredTodos = [...todoList].filter(
        (item) => item.status === status
      );
      setFiltered(filteredTodos);
    }
  };

  return (
    <div>
      <Select
        options={[
          { choice: "value", name: "By name" },
          { choice: "date", name: "By date" },
        ]}
        defaultName="Sort by"
        value={sort}
        onChange={(selected) => setSort(selected)}
        open={isOpen}
        setOpen={setIsOpen}
      />
      <TodoForm addNewTask={addTask} />
      <Search
        placeholder="Search here . . ."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      {todoList.length ? (
        <TodoList
          tasks={sortedAndSearchTasks}
          remove={removeTask}
          edited={editTasks}
          isEdit={status}
          setValue={setEdit}
          value={edit}
          save={saveTasks}
          completed={completedTask}
          todoFilter={filteredTasks}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
};
