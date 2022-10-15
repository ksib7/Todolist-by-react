import { ITasks } from "../TodoList/TodoListTypes";

export interface INewTask {
  addNewTask: (value: ITasks) => void;
}
