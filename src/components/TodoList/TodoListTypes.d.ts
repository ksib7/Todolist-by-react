export interface ITasks {
  id: string;
  date: string;
  status: boolean;
  value: string;
}

export interface ITodoList {
  tasks: ITasks[];
  remove: (item: ITasks) => void;
  edited: (value1: string, value2: string) => void;
  isEdit: boolean | string;
  value: string;
  setValue: (value: string) => void;
  save: (value: string) => void;
  completed: (value: string) => void;
  todoFilter: (value: string | boolean) => void;
}
