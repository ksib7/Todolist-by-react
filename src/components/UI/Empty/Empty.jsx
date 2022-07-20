import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

import cl from "./Empty.module.css";

export const Empty = () => {
  return (
    <Stack className={cl.messageBlock} spacing={2}>
      <Alert
        className={cl.message}
        style={{ border: "2px solid #60a3d8", borderRadius: "6px" }}
        variant="outlined"
        severity="info"
      >
        <AlertTitle>INFO</AlertTitle>
        THE TASK LIST IS AN EMPTY!
      </Alert>
    </Stack>
  );
};
