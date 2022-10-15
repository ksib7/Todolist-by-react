import React, { ComponentPropsWithoutRef } from "react";

import cl from "./Button.module.css";

export const Button = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...props} className={cl.button}>
      {children}
    </button>
  );
};
