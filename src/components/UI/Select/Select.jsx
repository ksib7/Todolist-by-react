import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import cl from "./Select.module.css";

export const Select = ({
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
          transform: `rotate(${open ? "180deg" : 0})`,
        }}
        className={cl.arrow}
      >
        <KeyboardArrowDownIcon />
      </div>
      <select
        className={cl.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => setOpen(!open)}
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
