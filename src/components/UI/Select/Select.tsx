import React, { FC } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ISelect } from "./SelectTypes";

import cl from "./Select.module.css";

export const Select: FC<ISelect> = ({
  defaultName,
  value,
  options,
  onChange,
  open,
  setOpen,
}) => {
  return (
    <div className={cl.wrapper}>
      <div
        style={{
          transition: "0.2s",
          transform: `rotate(${!open ? "90deg" : "0deg"})`,
        }}
        className={cl.arrow}
      >
        <KeyboardArrowDownIcon />
      </div>
      <select
        className={cl.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setOpen(false)}
        onPointerUp={() => setOpen(!open)}
      >
        <option disabled value="">
          {defaultName}
        </option>
        {options.map((item) => (
          <option value={item.choice} key={item.choice}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
