import React from "react";

import { Header } from "./components/Header/Header";
import { Tasks } from "./pages/Tasks/Tasks";

import "./style.css";

export const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Tasks />
      </div>
    </div>
  );
};
