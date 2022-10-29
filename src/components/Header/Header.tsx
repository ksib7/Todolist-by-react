import React, { FC } from "react";

import cl from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={cl.header}>
      <div className={cl.text}>TODO LIST</div>
    </div>
  );
};
