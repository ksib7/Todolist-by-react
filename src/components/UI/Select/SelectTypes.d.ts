export interface ISelect {
  defaultName: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  onChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}
