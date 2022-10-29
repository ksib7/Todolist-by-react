import React, { ComponentPropsWithoutRef } from "react";

import SearchIcon from "@mui/icons-material/Search";

import cl from "./Search.module.css";

export const Search = ({ ...props }: ComponentPropsWithoutRef<"input">) => {
  return (
    <form className={cl.form}>
      <input {...props} className={cl.input} type="search" />
      <SearchIcon
        style={{ width: "37.33px", height: "37.33px" }}
        className={cl.icon}
      />
    </form>
  );
};
