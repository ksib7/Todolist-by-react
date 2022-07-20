import React from "react";

import cl from "./Input.module.css";

export const Input = ({ ...props }) => {
  return <input {...props} className={cl.input} type="text" />;
};
