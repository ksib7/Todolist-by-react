import React, { ComponentPropsWithoutRef } from "react";

import cl from "./Input.module.css";

export const Input = ({ ...props }: ComponentPropsWithoutRef<"input">) => {
  return <input {...props} className={cl.input} type="text" />;
};
